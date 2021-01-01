import { Feature, FeatureSetting, ZoneConfig, SelectionItem } from "@makeproaudio/glue-feature-tools";
import { Stack } from "@makeproaudio/makehaus-nodered-lib";
import { setSynapsesManager } from "@makeproaudio/parameters-js";

export default class MyFeature implements Feature {
    public zones: ZoneConfig[] = [];

    public constructor(settings: FeatureSetting, registry: any, synapsesManager: any) {
        setSynapsesManager(synapsesManager);
    }

    public init?(): void {
        //
    }

    public exit?(): void {
        //
    }

    public takeStacksForZone(zoneConfig: ZoneConfig, stacks: Map<number, Stack>): void {
        //
    }

    public removeZone(zoneConfig: ZoneConfig, stacks: Map<number, Stack>): void {
        //
    }

    public takeSelectorForZone?(zoneConfig: ZoneConfig, selector: any): void {
        //
    }

    public getSelectionItems?(zoneConfig: ZoneConfig): SelectionItem[] {
        return [];
    }

    public onSettingsChange?(settings: FeatureSetting): void {
        //
    }

}