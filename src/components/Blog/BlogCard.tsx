import { BlogModel } from '@/lib/models';
import { Roboto, Rowdies, Ubuntu } from 'next/font/google';
import Link from 'next/link';
import { XSThreeDots } from '../ThreeDots';

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '500' });
const rowdiesBold = Rowdies({ subsets: ['latin'], weight: '300' });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });

interface Props {
  blog: BlogModel;
}

export function BlogCard({ blog }: Props) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className={`flex md:w-10/12 [&:only-child]:col-start-2`}
    >
      <div
        className={`mb-5 flex w-full cursor-pointer flex-col items-stretch justify-center rounded-b-2xl shadow-2xl duration-300 ease-in-out hover:scale-[1.03]`}
      >
        <div
          style={{
            backgroundImage: `url(/assets/blogs/${blog.slug}/card-cover.avif), linear-gradient(to bottom, ${blog.placeholderColors[0]} 0%, ${blog.placeholderColors[1]} 100%)`,
          }}
          className={`fadedImage ${blog.shadow} flex aspect-video justify-center justify-self-center rounded-t-3xl bg-cover bg-no-repeat`}
        ></div>
        <div
          className={`relative flex flex-1 flex-col bg-gradient-to-t text-[#F9F4F1] ${blog.backgroundColors} rounded-b-2xl`}
        >
          <div
            className={`flex h-full flex-col justify-between rounded-b-2xl p-9`}
          >
            <h1 className={`text-2xl text-[#F9F4F1] ${rowdiesBold.className}`}>
              {blog.title}
              <XSThreeDots
                containerClassName={`relative bottom-2 md:bottom-1 right-2 md:right-1 z-10 w-[1rem] md:w-[1.1rem]`}
              />
            </h1>
            <div className={`flex flex-row items-center justify-between pt-2`}>
              <p className={`${ubuntu.className}`}>
                {blog.publishedAt.toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <span className={`${roboto.className}`}>
                {blog.timeToRead} min read
              </span>
            </div>
          </div>
          {/*<div className={` relative bottom-0 rounded-b-xl bg-[url('/assets/lines.svg')] bg-left-bottom h-14`}></div>*/}
        </div>
      </div>
    </Link>
  );
}
