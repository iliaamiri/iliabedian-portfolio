import {TechnologyModel} from "@/lib/models/technology.model";

export interface ArtifactModel {
    id: number;

    name: string;
    slug: string;
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
    githubUrl?: string;
    demoUrl?: string;
    primaryThemeColor: string;
    tailwindClassDetection?: string; // For TailwindCSS to recognize the class in the build
}
