import {Inter, Rowdies, Ubuntu} from 'next/font/google'
import {StyledHeader} from "@/components/StyledHeader";
import {ArtifactItem} from "@/components/ArtifactItem";
import {artifacts} from "@/lib/data/artifacts";
import {MainHeader} from "@/components/MainHeader";
import {Contact} from "@/app/contact";
import {DiamondCube} from "@/components/DiamondCube";

const inter = Inter({subsets: ['latin']})
const rowdies = Rowdies({subsets: ['latin'], weight: '300'})

export default function Home() {
    return (
        <div>
            <div className={`${rowdies.className} flex flex-col w-full justify-center items-center gap-5`}>
                <h1 className={`text-5xl md:text-[5.252rem]`}>
                    E<span className={`text-[#2D6A4F]`}>ili</span>y<span className={`text-[#2D6A4F]`}>a</span> Abedianamiri
                </h1>
                <p>
                    Full-Stack Web Developer with a focus on Back-End Development. Cyber Security Enthusiast.
                </p>
            </div>

            <div className={`${rowdies.className} flex flex-row gap-28 mt-32`}>
                <div className={`flex flex-row rounded-2xl -rotate-45 bg-gradient-to-bl from-[#000000] via-[#000000] to-[#22AB00] w-[32rem] h-[32rem]`}>
                    <div className={`flex flex-row justify-start items-end overflow-hidden`}>
                        <img src={'/assets/ilia-headshot.svg'} className={`h-5/6 rotate-45 relative top-20 left-0`} />
                    </div>
                </div>
                <div className={`flex flex-row py-24 tb:py-27 md:py-27`}>
                    <div className={`flex flex-col justify-between`}>
                        <DiamondCube text={'Front-End Development'} />
                        <DiamondCube text={'Back-End Development'} />
                    </div>
                    <div className={`flex flex-col justify-center`}>
                        <DiamondCube text={'Full-Stack Web Development'} />
                    </div>
                    <div className={`flex flex-col justify-between`}>
                        <DiamondCube text={'Cybersecurity'} />
                    </div>
                </div>
            </div>

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
