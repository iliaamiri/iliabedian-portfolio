import Image from 'next/image';
import { StyledHeader } from '@/components/StyledHeader';
import { MarkdownContainer } from '@/components/Markdown/MarkdownContainer';
import { HeadshotImage } from '@/app/(root)/about/HeadshotImage';
import HeroCoverSrc from '../../../../public/assets/hero-cover.png';
import dynamic, { DynamicOptions } from 'next/dynamic';

export default function About() {
  const MDXBlogPost = dynamic(
    () =>
      import(
        /* webpackInclude: /\.mdx$/ */
        `@/app/(root)/about/content.mdx`
      ),
    {
      ssr: true,
    } as DynamicOptions<{}>
  );

  return (
    <>
      <div
        className={`-mt-20 flex w-full flex-col items-center md:-mt-40 lg:-mt-52`}
      >
        <div className='relative aspect-video max-h-[800px] w-full'>
          <Image
            src={HeroCoverSrc}
            alt={'blog cover'}
            placeholder={'blur'}
            className={`absolute -z-10 aspect-auto h-full w-full -translate-x-20 scale-150 md:translate-x-0  md:scale-100`}
            quality={100}
          />
        </div>
      </div>
      <div
        className={
          'static -mt-20 flex justify-center sm:-mt-28 md:relative md:-mt-32 lg:-mt-72 xl:-mt-80'
        }
      >
        <HeadshotImage />
      </div>
      <div className={'z-10'}>
        <StyledHeader>About</StyledHeader>
        <MarkdownContainer>
          <MDXBlogPost />
        </MarkdownContainer>
      </div>
    </>
  );
}
