import {artifacts} from "@/data/artifacts";
import {ArtifactCard} from "@/components/Artifact/ArtifactCard";
import {ArtifactCategory, validateArtifactCategory} from "@/lib/models";
import {StyledHeader} from "@/components/StyledHeader";
import {Suspense} from "react";
import {Loading} from "@/components/Loading";

const useArtifacts = (category: string | undefined) => {
    const result = {
        title: "All Artifacts",
        render: Object.values(artifacts).map(artifact => (
            <ArtifactCard key={artifact.slug} artifact={artifact}/>
        ))
    };
    if (!category || !validateArtifactCategory(category)) {
        return result;
    }

    const filteredArtifacts = Object.values(artifacts).filter(a => a.categories.includes(ArtifactCategory.All) || a.categories.includes(category));

    result.title = `${category} Artifacts (${filteredArtifacts.length})`;
    result.render = filteredArtifacts.map(artifact => (
        <ArtifactCard key={artifact.slug} artifact={artifact}/>
    ))
    return result;
}

export function Artifacts({searchParams}: { searchParams: { [key in string]: string } }) {
    const {title, render} = useArtifacts(searchParams['artifact-category']);
    return (
        <Suspense fallback={<Loading/>}>
            <StyledHeader id={'artifacts'}>
                {title}
            </StyledHeader>
            <div
                className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full gap-5 items-stretch justify-items-center px-5`}>
                {render}
            </div>
        </Suspense>
    );
}
