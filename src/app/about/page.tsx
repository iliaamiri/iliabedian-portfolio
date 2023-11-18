import Image from 'next/image';
import { StyledHeader } from '@/components/StyledHeader';
import MDXContent from '@/app/about/content.mdx';
import { MarkdownContainer } from '@/components/Markdown/MarkdownContainer';
import { HeadshotImage } from '@/app/about/HeadshotImage';
import HeroCoverSrc from '../../../public/assets/hero-cover.png';

export default function About() {
  return (
    <>
      <div
        className={`-mt-20 flex w-full flex-col items-center md:-mt-40 lg:-mt-52`}
      >
        <Image
          src={HeroCoverSrc}
          alt={'blog cover'}
          width={9999}
          height={800}
          placeholder={'blur'}
          className={`-z-10 h-auto w-full -translate-x-20 scale-150 md:translate-x-0  md:scale-100`}
          quality={100}
        />
      </div>
      <div
        className={
          'static -mt-12 flex justify-center md:relative md:-top-80 md:mt-24 lg:mt-0'
        }
      >
        <HeadshotImage />
      </div>
      <div className={'z-10'}>
        <StyledHeader>About Me</StyledHeader>
        <MarkdownContainer>
          <MDXContent />
        </MarkdownContainer>
      </div>
    </>
  );
}
