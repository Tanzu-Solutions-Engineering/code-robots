/*
 * Copyright © 2018 Atomist, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { GitHubRepoRef } from "@atomist/automation-client";
import {
    AutoCodeInspection,
    Autofix,
    AutofixRegistration,
    goalContributors,
    goals,
    hasFile,
    not,
    onAnyPush,
    PushImpact,
    SoftwareDeliveryMachine,
    SoftwareDeliveryMachineConfiguration,
    whenPushSatisfies,
} from "@atomist/sdm";
import {
    createSoftwareDeliveryMachine,
    gitHubGoalStatus,
    goalState,
    isInLocalMode,
} from "@atomist/sdm-core";
import { Build } from "@atomist/sdm-pack-build";
import { singleIssuePerCategoryManaging } from "@atomist/sdm-pack-issue";
import { codeMetrics } from "@atomist/sdm-pack-sloc";
import {
    HasSpringBootApplicationClass,
    HasSpringBootPom,
    IsMaven,
    ListBranchDeploys,
    mavenBuilder,
    MavenDefaultOptions,
    MavenPerBranchDeployment,
    ReplaceReadmeTitle,
    SetAtomistTeamInApplicationYml,
    SpringProjectCreationParameterDefinitions,
    SpringProjectCreationParameters,
    springSupport,
    TransformSeedToCustomProject,
} from "@atomist/sdm-pack-spring";
import axios from "axios";

export function machine(
    configuration: SoftwareDeliveryMachineConfiguration,
): SoftwareDeliveryMachine {

    const sdm: SoftwareDeliveryMachine = createSoftwareDeliveryMachine(
        {
            name: "Spring software delivery machine",
            configuration,
        });

    const autofix = new Autofix().with(AddLicenseFile);
    const inspect = new AutoCodeInspection();

    const checkGoals = goals("checks")
        .plan(autofix)
        .plan(inspect, new PushImpact()).after(autofix);

    const buildGoals = goals("build")
        .plan(new Build().with({ ...MavenDefaultOptions, builder: mavenBuilder() }))
        .after(autofix);

    const deployGoals = goals("deploy")
        .plan(new MavenPerBranchDeployment()).after(buildGoals);

    sdm.withPushRules(
        onAnyPush().setGoals(checkGoals),
        whenPushSatisfies(IsMaven).setGoals(buildGoals),
        whenPushSatisfies(HasSpringBootPom, HasSpringBootApplicationClass, IsMaven).setGoals(deployGoals),
    );

    sdm.addExtensionPacks(
        springSupport({
            inspectGoal: inspect,
            autofixGoal: autofix,
            review: {
                cloudNative: true,
                springStyle: true,
            },
            autofix: {},
            reviewListeners: isInLocalMode() ? [] : [
                singleIssuePerCategoryManaging("sdm-pack-spring"),
            ],
        }),
        codeMetrics(),
        goalState(),
        gitHubGoalStatus(),
    );

    sdm.addGeneratorCommand<SpringProjectCreationParameters>({
        name: "create-spring",
        intent: "create spring",
        description: "Create a new Java Spring Boot REST service",
        parameters: SpringProjectCreationParameterDefinitions,
        startingPoint: GitHubRepoRef.from({ owner: "atomist-seeds", repo: "spring-rest", branch: "master" }),
        transform: [
            ReplaceReadmeTitle,
            SetAtomistTeamInApplicationYml,
            TransformSeedToCustomProject,
        ],
    });

    sdm.addGeneratorCommand<SpringProjectCreationParameters>({
        name: "create-kotlin-spring",
        intent: "create kotlin spring",
        description: "Create a new Kotlin Spring Boot REST service",
        parameters: SpringProjectCreationParameterDefinitions,
        startingPoint: GitHubRepoRef.from({ owner: "atomist-seeds", repo: "kotlin-rest", branch: "master" }),
        transform: [
            ReplaceReadmeTitle,
            SetAtomistTeamInApplicationYml,
            TransformSeedToCustomProject,
        ],
    });

    sdm.addCommand(ListBranchDeploys);

    return sdm;
}

export const LicenseFilename = "LICENSE";

export const AddLicenseFile: AutofixRegistration = {
    name: "License Fix",
    pushTest: not(hasFile(LicenseFilename)),
    transform: async p => {
        const license = await axios.get("https://www.apache.org/licenses/LICENSE-2.0.txt");
        return p.addFile(LicenseFilename, license.data);
    },
};
