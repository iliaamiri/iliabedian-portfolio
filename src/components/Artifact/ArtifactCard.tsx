import { ArtifactModel } from '@/lib/models';
import { Rowdies, Ubuntu } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import { XSThreeDots } from '../ThreeDots';
import { placeholdersBase64 } from '@/lib/utils';

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '500' });
const rowdiesBold = Rowdies({ subsets: ['latin'], weight: '700' });

export function ArtifactCard({ artifact }: { artifact: ArtifactModel }) {
  return (
    <Link
      href={`/artifact-detail/${artifact.slug}`}
      className={`flex md:w-10/12`}
    >
      <div
        className={`flex h-full cursor-pointer flex-col items-stretch justify-center grayscale duration-300 ease-in-out hover:scale-[1.03] hover:grayscale-0`}
      >
        <div
          // style={{ backgroundImage: `url(${artifact.imageUrl})` }}
          className={`flex aspect-video justify-center justify-self-center rounded-3xl bg-cover bg-no-repeat`}
        >
          <Image
            src={`/assets/mockups/${artifact.slug}-min.jpg`}
            alt={artifact.summaryText}
            width={400}
            height={300}
            placeholder={'blur'}
            blurDataURL={'data:image/png;base64,' + placeholdersBase64.green}
            className={`h-full w-full rounded-3xl`}
            quality={100}
          />
        </div>
        <div
          className={`relative -top-20 flex flex-1 flex-col bg-gradient-to-t from-[#0A0A0A] text-[#F9F4F1] via-[${artifact.primaryThemeColor}] rounded-b-2xl p-9 pt-20`}
        >
          <h1 className={`text-3xl text-[#F9F4F1] ${rowdiesBold.className}`}>
            {artifact.name}
            <XSThreeDots
              containerClassName={`relative bottom-2 md:bottom-1 right-2 md:right-1 z-10 w-[1rem] md:w-[1.1rem]`}
            />
          </h1>
          <p className={`${ubuntu.className} pt-2`}>{artifact.summaryText}</p>
        </div>
        <div
          className={`relative -top-24 h-14 rounded-b-xl bg-[url('/assets/lines.svg')] bg-left-bottom`}
        ></div>
      </div>
    </Link>
  );
}
