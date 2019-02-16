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
Object.defineProperty(exports, "__esModule", { value: true });
const automation_client_1 = require("@atomist/automation-client");
const sdm_pack_build_1 = require("@atomist/sdm-pack-build");
const setSpringBootVersionTransform_1 = require("./setSpringBootVersionTransform");
/**
 * Spring Boot version we want
 */
exports.DesiredSpringBootVersion = "2.1.3.RELEASE";
/**
 * Wrap Spring Boot set version editor in a dryRunEditor, causing an event
 * handler to respond to the build with either a PR and Issue
 * @type {HandleCommand<EditOneOrAllParameters>}
 */
exports.TryToUpgradeSpringBootVersion = sdm_pack_build_1.makeBuildAware({
    transform: setSpringBootVersionTransform_1.SetSpringBootVersionTransform,
    parameters: {
        desiredBootVersion: {
            displayName: "Desired Spring Boot version",
            description: "The desired Spring Boot version across these repos",
            pattern: /^.+$/,
            validInput: "Semantic version",
            required: false,
            defaultValue: exports.DesiredSpringBootVersion,
        },
    },
    name: "boot-upgrade",
    description: `Upgrade Spring Boot version`,
    intent: "try to upgrade Spring Boot",
    transformPresentation: ci => new automation_client_1.editModes.PullRequest(`boot-upgrade`, `Upgrade Spring Boot version to ${ci.parameters.desiredBootVersion}`),
});
function guid() {
    return "" + new Date().getTime();
}
//# sourceMappingURL=tryToUpgradeSpringBootVersion.js.map