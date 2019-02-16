import { CodeTransformRegistration } from "@atomist/sdm";
/**
 * Spring Boot version we want
 */
export declare const DesiredSpringBootVersion = "1.5.0.RELEASE";
export interface DowngradeSpringBootParameters {
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
export declare const TryToDowngradeSpringBootVersion: CodeTransformRegistration<DowngradeSpringBootParameters>;
