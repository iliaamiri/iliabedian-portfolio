import {StyledHeader} from "@/components/StyledHeader";
import {artifacts} from "@/lib/data/artifacts";
import {ArtifactItem} from "@/components/ArtifactItem";
import {Ubuntu} from "next/font/google";
import IgaqMDX from '@/app/artifact-detail/igaq/igaq.mdx';

const ubuntu = Ubuntu({subsets: ['latin'], weight: '400'})

export default async function Page() {
    return (
        <div>
            <StyledHeader>
                I Got a Queery
            </StyledHeader>
            <ArtifactItem artifact={artifacts.igaq} isOnRight={false} />
            <div className={`flex flex-col items-center justify-center w-full ${ubuntu.className} markdown`} id={'readme'}>
                <div className={`w-9/12 md:w-7/12 pb-20`}>
                    <IgaqMDX />
                </div>
            </div>
        </div>
    );
}
