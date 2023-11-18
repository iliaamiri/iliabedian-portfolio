import { Rowdies } from 'next/font/google';
import { ThreeDots } from '@/components/ThreeDots';

const rowdies = Rowdies({ subsets: ['latin'], weight: '300' });

export function StyledHeader({
  ...otherProps
}: {
  children?: any;
  id?: string;
}) {
  return (
    <div className={`flex w-full justify-center`}>
      <div className={``}>
        <h1
          className={`${rowdies.className} text-center text-5xl md:text-[5.252rem]`}
          {...otherProps}
        />
        <ThreeDots
          containerClassName={`relative bottom-3 md:bottom-5 right-5 md:right-7 -z-10`}
        />
      </div>
    </div>
  );
}
