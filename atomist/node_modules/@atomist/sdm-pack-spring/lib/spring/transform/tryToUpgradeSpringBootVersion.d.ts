import { CodeTransformRegistration } from "@atomist/sdm";
/**
 * Spring Boot version we want
 */
export declare const DesiredSpringBootVersion = "2.1.3.RELEASE";
export interface UpgradeSpringBootParameters {
    /**
     * Version to upgrade to
     */
    desiredBootVersion: string;
}
/**
 * Wrap Spring Boot set version editor in a dryRunEditor, causing an event
 * handler to respond to the build with either a PR and Issue
 * @type {HandleCommand<EditOneOrAllParameters>}
 */
export declare const TryToUpgradeSpringBootVersion: CodeTransformRegistration<UpgradeSpringBootParameters>;
