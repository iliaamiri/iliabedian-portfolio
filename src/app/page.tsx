import {Inter, Rowdies, Ubuntu} from 'next/font/google'
import {StyledHeader} from "@/components/StyledHeader";
import {ArtifactItem} from "@/components/ArtifactItem";
import {artifacts} from "@/lib/data/artifacts";
import {MainHeader} from "@/components/MainHeader";
import {Contact} from "@/app/contact";

const inter = Inter({subsets: ['latin']})
const rowdies = Rowdies({subsets: ['latin'], weight: '300'})

export default function Home() {
    return (
        <div>
            <StyledHeader>
                Artifacts
            </StyledHeader>
            <ArtifactItem artifact={artifacts.igaq} isOnRight={false} />
            <ArtifactItem artifact={artifacts.interviewpal} isOnRight={true} />
            <ArtifactItem artifact={artifacts.tacticalPigeons} isOnRight={false} />
            <ArtifactItem artifact={artifacts.coughie} isOnRight={true} />

            <StyledHeader id={'contact'}>Contact</StyledHeader>
            <Contact />
        </div>
    )
}
