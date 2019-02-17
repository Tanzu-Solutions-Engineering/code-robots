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
const Tagger_1 = require("@atomist/automation-client/lib/operations/tagger/Tagger");
const sdm_1 = require("@atomist/sdm");
const sdm_core_1 = require("@atomist/sdm-core");
const gradleTagger_1 = require("./gradle/classify/gradleTagger");
const importDotStarReviewer_1 = require("./java/review/importDotStarReviewer");
const importIoFileReviewer_1 = require("./java/review/importIoFileReviewer");
const mavenTagger_1 = require("./maven/classify/mavenTagger");
const providedDependencyReviewer_1 = require("./maven/review/providedDependencyReviewer");
const addDependencyTransform_1 = require("./maven/transform/addDependencyTransform");
const springTagger_1 = require("./spring/classify/springTagger");
const findNonSpecificMvcAnnotations_1 = require("./spring/review/findNonSpecificMvcAnnotations");
const hardcodedPropertyReviewer_1 = require("./spring/review/hardcodedPropertyReviewer");
const mutableInjectionsReviewer_1 = require("./spring/review/mutableInjectionsReviewer");
const oldSpringBootVersionReviewer_1 = require("./spring/review/oldSpringBootVersionReviewer");
const addSpringBootActuator_1 = require("./spring/transform/addSpringBootActuator");
const addSpringBootStarterTransform_1 = require("./spring/transform/addSpringBootStarterTransform");
const springFormat_1 = require("./spring/transform/format/springFormat");
const securingWebApp_1 = require("./spring/transform/guide/securingWebApp");
const removeUnnecessaryAutowiredAnnotations_1 = require("./spring/transform/removeUnnecessaryAutowiredAnnotations");
const removeUnnecessaryComponentScanAnnotations_1 = require("./spring/transform/removeUnnecessaryComponentScanAnnotations");
const tryToUpgradeSpringBootVersion_1 = require("./spring/transform/tryToUpgradeSpringBootVersion");
const tryToDowngradeSpringBootVersion_1 = require("./spring/transform/tryToDowngradeSpringBootVersion");

/**
 * Extension pack offering Spring Boot support.
 * Adds Spring Boot related commands and automatic repo tagging
 * on the first push we see. Use options to determine whether
 * reviews and autofixes run.
 */
function springSupport(options) {
    return Object.assign({}, sdm_1.metadata(), { configure: sdm => {
            sdm
                .addCodeTransformCommand(addDependencyTransform_1.AddMavenDependency)
                .addCodeTransformCommand(addSpringBootStarterTransform_1.AddSpringBootStarter)
                .addCodeTransformCommand(addSpringBootActuator_1.addSpringBootActuator())
                .addCodeTransformCommand(securingWebApp_1.ApplySecuredWebAppGuide)
                .addCodeTransformCommand(tryToUpgradeSpringBootVersion_1.TryToUpgradeSpringBootVersion)
                .addCodeTransformCommand(tryToDowngradeSpringBootVersion_1.TryToDowngradeSpringBootVersion)
                .addFirstPushListener(sdm_core_1.tagRepo(Tagger_1.unifiedTagger(springTagger_1.springBootTagger, gradleTagger_1.gradleTagger, mavenTagger_1.mavenTagger)));
            if (!!options.inspectGoal) {
                if (options.review.cloudNative) {
                    options.inspectGoal
                        .with(importIoFileReviewer_1.ImportIoFileReviewer)
                        .with(importDotStarReviewer_1.ImportDotStarReviewer)
                        .with(hardcodedPropertyReviewer_1.HardcodedPropertyReviewer)
                        .with(providedDependencyReviewer_1.ProvidedDependencyReviewer);
                }
                if (options.review.springStyle) {
                    options.inspectGoal
                        .with(oldSpringBootVersionReviewer_1.OldSpringBootVersionReviewer)
                        .with(removeUnnecessaryComponentScanAnnotations_1.UnnecessaryComponentScanReviewer)
                        .with(mutableInjectionsReviewer_1.MutableInjectionsReviewer)
                        .with(findNonSpecificMvcAnnotations_1.NonSpecificMvcAnnotationsReviewer);
                }
                if (options.reviewListeners) {
                    const listeners = Array.isArray(options.reviewListeners) ?
                        options.reviewListeners : [options.reviewListeners];
                    listeners.forEach(l => options.inspectGoal.withListener(l));
                }
            }
            if (!!options.autofixGoal) {
                if (options.autofix.springStyle) {
                    options.autofixGoal
                        .with(removeUnnecessaryComponentScanAnnotations_1.UnnecessaryComponentScanAutofix)
                        .with(removeUnnecessaryAutowiredAnnotations_1.FixAutowiredOnSoleConstructor);
                }
                if (options.springFormat) {
                    options.autofixGoal
                        .with(springFormat_1.springFormat(sdm.configuration));
                }
            }
        } });
}
exports.springSupport = springSupport;
//# sourceMappingURL=spring.js.map