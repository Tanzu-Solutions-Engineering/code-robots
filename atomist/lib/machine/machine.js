"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const automation_client_1 = require("@atomist/automation-client");
const sdm_1 = require("@atomist/sdm");
const sdm_core_1 = require("@atomist/sdm-core");
const sdm_pack_build_1 = require("@atomist/sdm-pack-build");
const sdm_pack_issue_1 = require("@atomist/sdm-pack-issue");
const sdm_pack_sloc_1 = require("@atomist/sdm-pack-sloc");
const sdm_pack_spring_1 = require("@atomist/sdm-pack-spring");
const axios_1 = require("axios");
function machine(configuration) {
    const sdm = sdm_core_1.createSoftwareDeliveryMachine({
        name: "Spring software delivery machine",
        configuration,
    });
    const autofix = new sdm_1.Autofix().with(exports.AddLicenseFile);
    const inspect = new sdm_1.AutoCodeInspection();
    const checkGoals = sdm_1.goals("checks")
        .plan(autofix)
        .plan(inspect, new sdm_1.PushImpact()).after(autofix);
    const buildGoals = sdm_1.goals("build")
        .plan(new sdm_pack_build_1.Build().with(Object.assign({}, sdm_pack_spring_1.MavenDefaultOptions, { builder: sdm_pack_spring_1.mavenBuilder() })))
        .after(autofix);
    const deployGoals = sdm_1.goals("deploy")
        .plan(new sdm_pack_spring_1.MavenPerBranchDeployment()).after(buildGoals);
    sdm.withPushRules(sdm_1.onAnyPush().setGoals(checkGoals), sdm_1.whenPushSatisfies(sdm_pack_spring_1.IsMaven).setGoals(buildGoals), sdm_1.whenPushSatisfies(sdm_pack_spring_1.HasSpringBootPom, sdm_pack_spring_1.HasSpringBootApplicationClass, sdm_pack_spring_1.IsMaven).setGoals(deployGoals));
    sdm.addExtensionPacks(sdm_pack_spring_1.springSupport({
        inspectGoal: inspect,
        autofixGoal: autofix,
        review: {
            cloudNative: true,
            springStyle: true,
        },
        autofix: {},
        reviewListeners: sdm_core_1.isInLocalMode() ? [] : [
            sdm_pack_issue_1.singleIssuePerCategoryManaging("sdm-pack-spring"),
        ],
    }), sdm_pack_sloc_1.codeMetrics(), sdm_core_1.goalState(), sdm_core_1.gitHubGoalStatus());
    sdm.addGeneratorCommand({
        name: "create-spring",
        intent: "create spring",
        description: "Create a new Java Spring Boot REST service",
        parameters: sdm_pack_spring_1.SpringProjectCreationParameterDefinitions,
        startingPoint: automation_client_1.GitHubRepoRef.from({ owner: "atomist-seeds", repo: "spring-rest", branch: "master" }),
        transform: [
            sdm_pack_spring_1.ReplaceReadmeTitle,
            sdm_pack_spring_1.SetAtomistTeamInApplicationYml,
            sdm_pack_spring_1.TransformSeedToCustomProject,
        ],
    });
    sdm.addGeneratorCommand({
        name: "create-kotlin-spring",
        intent: "create kotlin spring",
        description: "Create a new Kotlin Spring Boot REST service",
        parameters: sdm_pack_spring_1.SpringProjectCreationParameterDefinitions,
        startingPoint: automation_client_1.GitHubRepoRef.from({ owner: "atomist-seeds", repo: "kotlin-rest", branch: "master" }),
        transform: [
            sdm_pack_spring_1.ReplaceReadmeTitle,
            sdm_pack_spring_1.SetAtomistTeamInApplicationYml,
            sdm_pack_spring_1.TransformSeedToCustomProject,
        ],
    });
    sdm.addCommand(sdm_pack_spring_1.ListBranchDeploys);
    return sdm;
}
exports.machine = machine;
exports.LicenseFilename = "LICENSE";
exports.AddLicenseFile = {
    name: "License Fix",
    pushTest: sdm_1.not(sdm_1.hasFile(exports.LicenseFilename)),
    transform: (p) => __awaiter(this, void 0, void 0, function* () {
        const license = yield axios_1.default.get("https://www.apache.org/licenses/LICENSE-2.0.txt");
        return p.addFile(exports.LicenseFilename, license.data);
    }),
};
//# sourceMappingURL=machine.js.map