import {artifacts} from "@/data/artifacts";

export function getArtifact(slug: string) {
    return artifacts[slug] || null;
}
