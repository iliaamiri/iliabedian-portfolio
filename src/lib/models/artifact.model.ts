import {TechnologyModel} from "@/lib/models/technology.model";

export interface ArtifactModel {
    id: number;

    name: string;
    imageUrl: string;
    summaryText: string;
    technologies: [
        {
            list: TechnologyModel[],
            shouldMarquee: boolean
        },
        {
            list: TechnologyModel[],
            shouldMarquee: boolean
        },
    ];
}
