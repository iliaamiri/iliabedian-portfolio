import {Inter, Rowdies} from 'next/font/google'
import {StyledHeader} from "@/components/StyledHeader";
import {artifacts} from "@/lib/data/artifacts";
import {Contact} from "@/app/contact";
import {DiamondCube} from "@/components/DiamondCube";
import Link from "next/link";
import { ArtifactCard } from '@/components/Artifact/ArtifactCard';
import {AestheticRender} from "@/components/AestheticRender";

const inter = Inter({subsets: ['latin']})
const rowdies = Rowdies({subsets: ['latin'], weight: '300'})

export default function Home() {
    return (
        <div>
            <div className={`${rowdies.className} flex flex-col w-full justify-center items-center gap-5 text-center px-5`}>
                <h1 className={`text-5xl text-[3.0rem] md:text-[5.252rem]`}>
                    E<span className={`text-primaryDawn`}>ili</span>y<span className={`text-primaryDawn`}>a</span> Abedianamiri
                </h1>
                <p className={'md:w-5/12'}>
                    <span className={`text-primaryDawn`}>Full-stack developer</span>, <span className={`text-primaryDawn`}>software engineer</span>, and <span className={`text-primaryDawn`}>researcher</span> learning new things and building cool projects. Welcome to my portfolio.
                </p>
            </div>

            <div className={`relative top-40 -mt-20 mb-4`}>
                <div className={`flex flex-col gap-3 whitespace-nowrap`}>
                    {AestheticRender(20, 'slow')}
                    {AestheticRender(20, 'slow')}
                    {AestheticRender(20, 'slow')}
                    {AestheticRender(20, 'slow')}
                </div>
            </div>

            <div className={`${rowdies.className} relative flex flex-col md:flex-row justify-center items-center gap-28 mt-14 md:mt-0 md:pl-10 md:mb-24 lg:mt-28 lg:mb-32`}>
                <Link href={'https://callista-stefanie.com'}>
                    <img src={'/assets/stef-credit.svg'} className={'absolute z-30 bottom-96 md:-bottom-12 lg:-bottom-36 left-0 md:left-32 lg:left-44 xl:left-[30rem] scale-[0.5] xl:scale-[0.7] cursor-pointer'}  alt={'Art by: Callista Stefanie Taswin'}/>
                </Link>
                <div className={`flex flex-row rounded-2xl overflow-hidden -ml-5 -rotate-45 bg-gradient-to-bl from-[#000000] via-[#000000] to-[#22AB00] w-[32rem] h-[32rem] md:w-[16rem] md:h-[16rem] lg:w-[32rem] lg:h-[32rem]`}>
                    <div className={`flex flex-row justify-start items-end`}>
                        <img src={'/assets/ilia-headshot.svg'} className={`h-5/6 rotate-45 relative top-20 left-0`} />
                    </div>
                </div>
                <div className={`flex flex-row justify-center md:justify-start pb-16 md:py-[4.6rem] lg:py-[4.4rem] xl:py-[0rem]`}>
                    <div className={`flex flex-col justify-between gap-14 lg:gap-16 xl:gap-20`}>
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
            <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full gap-5 items-stretch justify-items-center px-5`}>
                <ArtifactCard artifact={artifacts.igaq} />
                <ArtifactCard artifact={artifacts.interviewpal} />
                <ArtifactCard artifact={artifacts.tacticalPigeons} />
                <ArtifactCard artifact={artifacts.coughie} />
            </div>

            <StyledHeader id={'contact'}>Contact</StyledHeader>
        </div>
    )
}
