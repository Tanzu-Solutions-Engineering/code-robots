import { AutofixRegistration, SoftwareDeliveryMachine, SoftwareDeliveryMachineConfiguration, CommandHandlerRegistration } from "@atomist/sdm";
export declare function machine(configuration: SoftwareDeliveryMachineConfiguration): SoftwareDeliveryMachine;
export declare const LicenseFilename = "LICENSE";
export declare const AddLicenseFile: AutofixRegistration;
export declare const PushSpringBootUpgrade: CommandHandlerRegistration;
