import {Inter, Rowdies, Ubuntu} from 'next/font/google'
import {StyledHeader} from "@/components/StyledHeader";
import {ArtifactItem} from "@/components/ArtifactItem";
import {artifacts} from "@/lib/data/artifacts";

const inter = Inter({subsets: ['latin']})
const rowdies = Rowdies({subsets: ['latin'], weight: '300'})

export default function Home() {
    return (
        <div>
            <StyledHeader>
                Artifacts
            </StyledHeader>
            <ArtifactItem artifact={artifacts[0]} isOnRight={true} />
            <ArtifactItem artifact={artifacts[0]} isOnRight={false} />
        </div>
    )
}
