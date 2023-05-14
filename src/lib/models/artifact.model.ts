import {TechnologyModel} from "@/lib/models/technology.model";
import {z} from "zod";

export interface ArtifactModel {
    id: number;

    name: string;
    slug: string;
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

    categories: ArtifactCategory[]
}

export enum ArtifactCategory {
    FullStack = "Full Stack",
    BackEnd = "Back End",
    FrontEnd = "Front End",
    CyberSecurity = "Cyber Security",
    All = "All"
}

export function validateArtifactCategory(category: string): category is ArtifactCategory {
    const parseResult = z.nativeEnum(ArtifactCategory).safeParse(category);
    return parseResult.success;
}
