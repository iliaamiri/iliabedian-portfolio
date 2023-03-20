import {StyledHeader} from "@/components/StyledHeader";
import {artifacts} from "@/lib/data/artifacts";
import {ArtifactItem} from "@/components/ArtifactItem";
import {Ubuntu} from "next/font/google";
import TacticalPigeonMDX from './tactical-pigeon.mdx';

const ubuntu = Ubuntu({subsets: ['latin'], weight: '400'})

export default async function Page() {
    return (
        <div>
            <StyledHeader>
                Tactical Pigeons
            </StyledHeader>
            <ArtifactItem artifact={artifacts.tacticalPigeons} isOnRight={true} />
            <div className={`flex flex-col items-center justify-center w-full ${ubuntu.className} markdown`} id={'readme'}>
                <div className={`w-9/12 md:w-7/12 pb-20`}>
                    <TacticalPigeonMDX />
                </div>
            </div>
        </div>
    );
}
