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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var automation_client_1 = require("@atomist/automation-client");
var sdm_1 = require("@atomist/sdm");
var sdm_core_1 = require("@atomist/sdm-core");
var sdm_pack_build_1 = require("@atomist/sdm-pack-build");
var sdm_pack_issue_1 = require("@atomist/sdm-pack-issue");
var sdm_pack_sloc_1 = require("@atomist/sdm-pack-sloc");
var sdm_pack_spring_1 = require("@atomist/sdm-pack-spring");
var axios_1 = require("axios");
function machine(configuration) {
    var sdm = sdm_core_1.createSoftwareDeliveryMachine({
        name: "Spring software delivery machine",
        configuration: configuration,
    });
    var autofix = new sdm_1.Autofix();
    var inspect = new sdm_1.AutoCodeInspection();
    var checkGoals = sdm_1.goals("checks")
        .plan(autofix)
        .plan(inspect, new sdm_1.PushImpact()).after(autofix);
    var buildGoals = sdm_1.goals("build")
        .plan(new sdm_pack_build_1.Build().with(__assign({}, sdm_pack_spring_1.MavenDefaultOptions, { builder: sdm_pack_spring_1.mavenBuilder() })))
        .after(autofix);
    var deployGoals = sdm_1.goals("deploy")
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
    sdm.addCommand(exports.PushSpringBootUpgrade);
    return sdm;
}
exports.machine = machine;
exports.LicenseFilename = "LICENSE";
exports.AddLicenseFile = {
    name: "License Fix",
    pushTest: sdm_1.not(sdm_1.hasFile(exports.LicenseFilename)),
    transform: function (p) { return __awaiter(_this, void 0, void 0, function () {
        var license;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get("https://www.apache.org/licenses/LICENSE-2.0.txt")];
                case 1:
                    license = _a.sent();
                    return [2 /*return*/, p.addFile(exports.LicenseFilename, license.data)];
            }
        });
    }); },
};
exports.PushSpringBootUpgrade = {
    name: "PushSpringBootUpgrade",
    description: "Create git branch and push to github",
    intent: "push upgrade",
    listener: function (ci) { return __awaiter(_this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdm_1.execPromise("git", ['push', 'origin', 'boot-upgrade'], { cwd: "../code-robots" })];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, ci.addressChannels(result.stdout)];
            }
        });
    }); },
};
