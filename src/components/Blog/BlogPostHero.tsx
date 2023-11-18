import { ThreeDots } from '@/components/ThreeDots';
import Link from 'next/link';
import Image from 'next/image';
import Icon_Twitter from '../../../public/assets/icons/share/twitter.svg';
import Icon_Linkedin from '../../../public/assets/icons/share/linkedin.svg';
import Icon_CopyLink from '../../../public/assets/icons/share/web-link.svg';
import { Roboto, Rowdies, Ubuntu } from 'next/font/google';
import { useEffect, useState } from 'react';
import { BlogModel } from '@/lib/models';
import { ShareLinkImage } from '@/components/Blog/ShareLinkImage';

const rowdies = Rowdies({ subsets: ['latin'], weight: '300' });
const ubuntu = Ubuntu({ subsets: ['latin'], weight: '500' });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export function BlogPostHero({
  coverImage,
  blog,
  ...otherProps
}: {
  children?: any;
  id?: string;
  coverImage?: any;
  blog: BlogModel;
}) {
  const [currentUrl, setCurrentUrl] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  return (
    <div className={`-mt-20 flex w-full flex-col items-center md:-mt-40`}>
      <div
        style={{
          backgroundImage: `url(${coverImage}), linear-gradient(to bottom, ${blog.placeholderColors[0]} 0%, ${blog.placeholderColors[1]} 100%)`,
        }}
        className={`h-[30vw] w-full bg-gradient-to-r bg-cover bg-bottom md:h-[45vw] lg:h-[35vw] xl:h-[27vw] ${blog.backgroundColors}`}
      ></div>
      <div className={`-mt-5 w-11/12 md:-mt-20 md:w-9/12`}>
        <h1
          className={`${rowdies.className} rounded-t-2xl bg-backgroundDawn px-3 pt-5 text-4xl md:px-10 md:pt-10 md:text-5xl lg:text-[5.252rem]`}
          {...otherProps}
        />
        <ThreeDots
          containerClassName={`relative bottom-3 md:bottom-5 right-5 md:right-7 z-10`}
        />
        <div
          className={
            'mb-5 flex w-full flex-row justify-end gap-2 text-xs md:gap-5 md:text-base'
          }
        >
          <div className={`flex flex-row items-center justify-between gap-3`}>
            <span className={`${roboto.className}`}>
              {blog.timeToRead} min read
            </span>
            <span>|</span>
            <p className={`${ubuntu.className}`}>
              {blog.publishedAt.toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
          <div
            className={`flex items-center justify-end gap-2 md:gap-4 md:pr-10`}
          >
            <Link
              target={'_blank'}
              className={`mr-2 hover:opacity-50`}
              href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${blog.title}`}
            >
              <ShareLinkImage
                src={Icon_Twitter}
                alt={'Share on Twitter'}
                width={40}
                height={40}
                className={`cursor-pointer`}
              />
            </Link>
            <Link
              target={'_blank'}
              className={`hover:opacity-50`}
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${blog.title}`}
            >
              <ShareLinkImage
                src={Icon_Linkedin}
                alt={'Share on LinkedIn'}
                width={30}
                height={30}
                className={`cursor-pointer`}
              />
            </Link>
            <button
              className={`hover:opacity-50`}
              onClick={() => navigator.clipboard.writeText(currentUrl || '')}
            >
              <ShareLinkImage
                src={Icon_CopyLink}
                alt={'Copy link'}
                width={45}
                height={45}
                className={`cursor-pointer`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
