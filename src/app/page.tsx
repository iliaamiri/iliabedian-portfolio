import {Rowdies} from 'next/font/google'
import {StyledHeader} from "@/components/StyledHeader";
import {artifacts} from "@/lib/data/artifacts";
import {DiamondCube} from "@/components/DiamondCube";
import Link from "next/link";
import Image from "next/image";
import {AestheticRender} from "@/components/AestheticRender";
import IliaHeadshotSVG from '../../public/assets/ilia-headshot.svg';
import {placeholdersBase64} from "@/lib/utils";
import {ArtifactCard} from "@/components/Artifact/ArtifactCard";
import {ArtifactCategory, validateArtifactCategory} from "@/lib/models";
import {CategorySelector} from "@/components/Artifact/CategorySelector";
import {Artifacts} from "@/components/Artifact/Artifacts";

const rowdies = Rowdies({subsets: ['latin'], weight: '300'});


export default function Home({searchParams}: any) {
    return (
        <div>
            <div
                className={`${rowdies.className} flex flex-col w-full justify-center items-center gap-5 text-center px-5`}>
                <h1 className={`text-5xl text-[3.0rem] md:text-[5.252rem]`} title={'Eiliya Abedianamiri'}>
                    E<span className={`text-primaryDawn`}>ili</span>y<span
                    className={`text-primaryDawn`}>a</span> Abedianamiri
                </h1>
                <p className={'md:w-5/12'}>
                    <span className={`text-primaryDawn`}>Full-stack developer</span>, <span
                    className={`text-primaryDawn`}>software engineer</span>, and <span
                    className={`text-primaryDawn`}>researcher</span> learning new things and building cool projects.
                    Welcome to my portfolio.
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

            <div className={'relative top-[32rem] md:-top-10 lg:top-20'} id={'categories'}></div>
            <div
                className={`${rowdies.className} relative flex flex-col md:flex-row justify-center items-center gap-28 mt-14 md:mt-0 md:pl-10 md:mb-24 lg:mt-28 lg:mb-32`}>
                <Link href={'https://callista-stefanie.com'} target={'_blank'}>
                    <Image src={'/assets/stef-credit.svg'} width={400} height={400}
                           blurDataURL={"data:image/png;base64," + placeholdersBase64.faintedWhite}
                           placeholder={'blur'}
                           className={'absolute z-30 bottom-96 md:-bottom-12 lg:-bottom-36 left-0 md:left-32 lg:left-44 xl:left-[29rem] scale-[0.5] xl:scale-[0.6] cursor-pointer'}
                           alt={'Art by: Callista Stefanie Taswin'}/>
                </Link>
                <div
                    className={`flex flex-row rounded-2xl overflow-hidden -ml-5 -rotate-45 bg-gradient-to-bl from-[#000000] via-[#000000] to-[#22AB00] w-[32rem] h-[32rem] md:w-[16rem] md:h-[16rem] lg:w-[32rem] lg:h-[32rem]`}>
                    <div className={`flex flex-row justify-start items-end`}>
                        <Image src={IliaHeadshotSVG} width={300} height={300}
                               blurDataURL={"data:image/png;base64," + placeholdersBase64.darkGreen}
                               placeholder={'blur'}
                               className={`h-5/6 rotate-45 relative top-28 md:top-10 lg:top-20 -left-8 md:-left-14 lg:-left-2 rounded-t-3xl`}
                               alt={'Ilia Abedianamiri Headshot SVG'}/>
                    </div>
                </div>
                <div
                    className={`flex flex-row justify-center md:justify-start pb-16 md:py-[4.6rem] lg:py-[4.4rem] xl:py-[0rem]`}>
                    <div className={`flex flex-col justify-between gap-14 lg:gap-16 xl:gap-20`}>
                        <CategorySelector title={'Back-End Development'} category={searchParams['artifact-category']} selectingCategory={ArtifactCategory.BackEnd} />
                        <CategorySelector title={'Cybersecurity'} category={searchParams['artifact-category']} selectingCategory={ArtifactCategory.CyberSecurity} />
                    </div>
                    <div className={`flex flex-col justify-center`}>
                        <CategorySelector title={'Front-End Development'} category={searchParams['artifact-category']} selectingCategory={ArtifactCategory.FrontEnd} />
                    </div>
                    <div className={`flex flex-col justify-between`}>
                        <CategorySelector title={'Full-Stack Web Development'} category={searchParams['artifact-category']} selectingCategory={ArtifactCategory.FullStack} />
                    </div>
                </div>
            </div>

            <Artifacts searchParams={searchParams} />

            <StyledHeader id={'contact'}>Contact</StyledHeader>
        </div>
    )
}
