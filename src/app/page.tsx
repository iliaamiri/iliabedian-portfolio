import {Inter, Rowdies, Ubuntu} from 'next/font/google'
import {StyledHeader} from "@/components/StyledHeader";
import {ArtifactItem} from "@/components/ArtifactItem";
import {artifacts} from "@/lib/data/artifacts";
import {Contact} from "@/app/contact";
import {DiamondCubeArtifactType} from "@/components/DiamondCube";
import Link from "next/link";

const inter = Inter({subsets: ['latin']})
const rowdies = Rowdies({subsets: ['latin'], weight: '300'})

export default function Home() {
    return (
        <div>
            <div className={`${rowdies.className} flex flex-col w-full justify-center items-center gap-5 text-center px-5`}>
                <h1 className={`text-5xl text-[3.0rem] md:text-[5.252rem]`}>
                    E<span className={`text-[#2D6A4F]`}>ili</span>y<span className={`text-[#2D6A4F]`}>a</span> Abedianamiri
                </h1>
                <p className={'md:w-5/12'}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    I'm a full-stack web developer, web-master, and researcher learning new things and creating semi-enterprise projects for my individual clients. Welcome to my portfolio.
                </p>
            </div>

            <div className={`${rowdies.className} flex flex-col tb:flex-row md:flex-row gap-28 mt-32 tb:mb-16 md:mb-36`}>
                <div className={`flex flex-row rounded-2xl overflow-hidden -ml-5 md:ml-0 -rotate-45 bg-gradient-to-bl from-[#000000] via-[#000000] to-[#22AB00] w-[32rem] h-[32rem] tb:w-[22rem] tb:h-[22rem] md:w-[32rem] md:h-[32rem]`}>
                    <div className={`flex flex-row justify-start items-end`}>
                        <img src={'/assets/ilia-headshot.svg'} className={`h-5/6 rotate-45 relative top-20 left-0 tb:-left-5`} />
                    </div>
                </div>
                <div className={`flex flex-row justify-center md:justify-start pb-20 tb:py-[6.0rem] md:py-27`}>
                    <div className={`flex flex-col justify-between`}>
                        <DiamondCubeArtifactType text={'Front-End Development'} />
                        <DiamondCubeArtifactType text={'Back-End Development'} />
                    </div>
                    <div className={`flex flex-col justify-center`}>
                        <DiamondCubeArtifactType text={'Full-Stack Web Development'} />
                    </div>
                    <div className={`flex flex-col justify-between`}>
                        <DiamondCubeArtifactType text={'Cybersecurity'} />
                    </div>
                </div>
                <Link href={'https://callista-stefanie.com'}>
                    <img src={'/assets/stef-credit.svg'} className={'absolute z-30 -bottom-72 tb:-bottom-40 md:-bottom-96 -left-6 tb:-left-2 md:left-10 scale-[0.5] tb:scale-[0.4] cursor-pointer'}  alt={'Art by: Callista Stefanie Taswin'}/>
                </Link>
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
