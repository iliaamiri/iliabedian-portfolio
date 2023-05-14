'use client';
import {useParams} from "next/navigation";
import {NotFound} from "@/components/Errors/404";
import {getArtifact} from "@/app/artifact-detail/[slug]/helpers";
import dynamic from "next/dynamic";
import {DynamicOptions} from "next/dist/shared/lib/dynamic";
import {StyledHeader} from "@/components/StyledHeader";
import {ArtifactItem} from "@/components/Artifact/ArtifactItem";
import {Roboto} from "next/font/google";
import {code} from "@/lib/code";

const roboto = Roboto({subsets: ['latin'], weight: '400'});

export default function ArtifactDetail() {
    const params = useParams();

    const artifact = getArtifact(params.slug);
    if (artifact == null) {
        return <NotFound />;
    }

    const MDXContent = dynamic(() => import(
        /* webpackInclude: /\.mdx$/ */
        `@/lib/data/artifacts/${params.slug}/content.mdx`
        ), {
        ssr: true,
    } as DynamicOptions<{}>);

    return (
        <div>
            <StyledHeader>
                {artifact.name}
            </StyledHeader>
            <ArtifactItem artifact={artifact} isOnRight={artifact.id % 2 === 0 } />
            <div className={`flex flex-col items-center justify-center w-full ${roboto.className} markdown`} id={'readme'}>
                <div className={`w-9/12 md:w-7/12 pb-20`}>
                    {/* @ts-ignore - dynamic import doesn't understand .MDX types */}
                    <MDXContent components={{code}} />
                </div>
            </div>
        </div>
    );
}
