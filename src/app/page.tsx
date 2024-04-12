import { Rowdies } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import { AestheticRender } from '@/components/AestheticRender';
import IliaHeadshotSVG from '../../public/assets/ilia-headshot.svg';
import { placeholdersBase64 } from '@/lib/utils';
import { ArtifactCategory } from '@/lib/models';
import { CategorySelector } from '@/components/Artifact/CategorySelector';
import { Artifacts } from '@/components/Artifact/Artifacts';

const rowdies = Rowdies({ subsets: ['latin'], weight: '300' });

export default function Home({ searchParams }: any) {
  return (
    <div>
      <div
        className={`${rowdies.className} flex w-full flex-col items-center justify-center gap-5 px-5 text-center`}
      >
        <h1
          className={`text-5xl text-[3.0rem] md:text-[5.252rem]`}
          title={'Eiliya Abedianamiri'}
        >
          E<span className={`text-primaryDawn`}>ili</span>y
          <span className={`text-primaryDawn`}>a</span> Abedianamiri
        </h1>
        <p className={'md:w-5/12'}>
          <span className={`text-primaryDawn`}>Full-stack developer</span> and{' '}
          <span className={`text-primaryDawn`}>software programmer</span> always
          learning new things and building cool projects. Welcome to my
          portfolio.
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

      <div
        className={'relative top-[40rem] md:-top-10 lg:top-20'}
        id={'categories'}
      ></div>
      <div
        className={`${rowdies.className} relative mt-14 flex flex-col items-center justify-center gap-28 md:mb-24 md:mt-0 md:flex-row md:pl-10 lg:mb-32 lg:mt-28`}
      >
        <Link href={'https://callista-stefanie.com'} target={'_blank'}>
          <Image
            src={'/assets/stef-credit.svg'}
            width={400}
            height={400}
            blurDataURL={
              'data:image/png;base64,' + placeholdersBase64.faintedWhite
            }
            placeholder={'blur'}
            className={
              'absolute bottom-96 left-0 z-30 scale-[0.5] cursor-pointer md:-bottom-12 md:left-32 lg:-bottom-36 lg:left-44 xl:left-[29rem] xl:scale-[0.6]'
            }
            alt={'Art by: Callista Stefanie Taswin'}
          />
        </Link>
        <div
          className={`-ml-5 flex h-[32rem] w-[32rem] -rotate-45 flex-row overflow-hidden rounded-2xl bg-gradient-to-bl from-[#000000] via-[#000000] to-[#22AB00] md:h-[16rem] md:w-[16rem] lg:h-[32rem] lg:w-[32rem]`}
        >
          <div className={`flex flex-row items-end justify-start`}>
            <Image
              src={IliaHeadshotSVG}
              width={300}
              height={300}
              blurDataURL={
                'data:image/png;base64,' + placeholdersBase64.darkGreen
              }
              placeholder={'blur'}
              className={`relative -left-8 top-28 h-5/6 rotate-45 rounded-t-3xl md:-left-14 md:top-10 lg:-left-2 lg:top-20`}
              alt={'Ilia Abedianamiri Headshot SVG'}
            />
          </div>
        </div>
        <div
          className={`flex flex-row justify-center pb-16 md:justify-start md:py-[4.6rem] lg:py-[4.4rem] xl:py-[0rem]`}
        >
          <div
            className={`flex flex-col justify-between gap-14 lg:gap-16 xl:gap-20`}
          >
            <CategorySelector
              title={'Back-End Development'}
              category={searchParams['artifact-category']}
              selectingCategory={ArtifactCategory.BackEnd}
            />
            <CategorySelector
              title={'Cybersecurity'}
              category={searchParams['artifact-category']}
              selectingCategory={ArtifactCategory.CyberSecurity}
            />
          </div>
          <div className={`flex flex-col justify-center`}>
            <CategorySelector
              title={'Front-End Development'}
              category={searchParams['artifact-category']}
              selectingCategory={ArtifactCategory.FrontEnd}
            />
          </div>
          <div className={`flex flex-col justify-between`}>
            <CategorySelector
              title={'Full-Stack Web Development'}
              category={searchParams['artifact-category']}
              selectingCategory={ArtifactCategory.FullStack}
            />
          </div>
        </div>
      </div>

      <Artifacts searchParams={searchParams} />
    </div>
  );
}
