import {artifacts} from "@/lib/data/artifacts";

export function getArtifact(slug: string) {
    return artifacts[slug] || null;
}
