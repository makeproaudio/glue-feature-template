import { Feature, FeatureSetting, ZoneConfig, SelectionItem } from "@makeproaudio/glue-feature-tools";
import { Parameter, setSynapsesManager } from "@makeproaudio/parameters-js";
import { EventEmitter } from "events";

export default class MyFeature extends EventEmitter implements Feature {
    public zones: ZoneConfig[] = [];

    public constructor(settings: FeatureSetting, registry: any, synapsesManager: any) {
        super();
        setSynapsesManager(synapsesManager);
    }

    public init?(): void {
        //
    }

    public exit?(): void {
        //
    }

    public giveParametersForZone(zoneConfig: ZoneConfig): Map<number, Parameter<any>> | Promise<Map<number, Parameter<any>>> {
        return new Map();
    }

    public giveParametersForNavigatorSelection?(selection: 1 | 2 | 3): Map<number, Parameter<any>> | false | Promise<Map<number, Parameter<any>> | false> { 
        return false;
    }

    public giveParametersForNavigatorMapping?(mapping: 1 | 2 | 3 | 4 | 5): Map<number, Parameter<any>> | false | Promise<Map<number, Parameter<any>> | false> { 
        return false;
    }

    public onSettingsChange?(settings: FeatureSetting): void {
        //
    }
}