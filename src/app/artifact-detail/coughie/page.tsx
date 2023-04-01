import {StyledHeader} from "@/components/StyledHeader";
import {artifacts} from "@/lib/data/artifacts";
import {ArtifactItem} from "@/components/ArtifactItem";
import {Roboto} from "next/font/google";
import CoughieMDX from '@/app/artifact-detail/coughie/coughie.mdx';

const roboto = Roboto({subsets: ['latin'], weight: '400'});


export default async function Page() {
    return (
        <div>
            <StyledHeader>
                Coughie
            </StyledHeader>
            <ArtifactItem artifact={artifacts.coughie} isOnRight={false} />
            <div className={`flex flex-col items-center justify-center w-full ${roboto.className} markdown`} id={'readme'}>
                <div className={`w-9/12 md:w-7/12 pb-20`}>
                    <CoughieMDX />
                </div>
            </div>
        </div>
    );
}
