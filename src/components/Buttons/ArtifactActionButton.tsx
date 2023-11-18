import { Rowdies } from 'next/font/google';

interface Props {
  size?: 'small' | 'medium' | 'large';
  children?: any;
  className?: string;
}

const rowdies = Rowdies({ subsets: ['latin'], weight: '400' });

export function ArtifactActionButton({
  size,
  className = '',
  ...otherProps
}: Props) {
  return (
    <button
      className={`${className} ${rowdies.className} rounded-xl border-[1px] border-[#52B788] bg-[#48AD7E] px-3 py-2 text-[#F9F4F1] duration-300 ease-out hover:translate-x-[8px] hover:translate-y-[-8px] hover:text-[#22246A] hover:shadow-[-8px_8px_0_0_#5441FF] active:translate-x-[4px] active:translate-y-[-4px] active:shadow-[-4px_4px_0_0_#22246A]`}
      {...otherProps}
    />
  );
}
