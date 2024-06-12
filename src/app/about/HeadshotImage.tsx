import Image from 'next/image';
import ImageSrc from './about-me-headshot.jpg';

export function HeadshotImage() {
  return (
    <div className='relative aspect-square h-[150px] min-w-[150px] md:h-[300px] md:min-w-[300px]'>
      <Image
        src={ImageSrc}
        alt={'ilia'}
        className={`absolute aspect-square h-full w-full rounded-full`}
        quality={100}
        placeholder='blur'
      />
    </div>
  );
}
