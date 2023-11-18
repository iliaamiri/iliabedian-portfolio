import { Rowdies } from 'next/font/google';

const rowdies = Rowdies({ subsets: ['latin'], weight: '300' });

interface DiamondCubeArtifactTypeProps {
  text: string;
  containerClassName?: string;
  onClick?: () => void;
  isActive?: boolean;
}

export function DiamondCube({
  text,
  containerClassName,
  onClick,
  isActive = false,
}: DiamondCubeArtifactTypeProps) {
  return (
    <div
      onClick={onClick}
      className={`${
        rowdies.className
      } group flex h-32 w-32 rotate-45 cursor-pointer items-center justify-center rounded-lg bg-primaryDawn text-[#F9F4F1] md:h-32 md:w-32 ${containerClassName}
            ${
              isActive ? 'shadow-[-8px_8px_0_0_#5441FF]' : ''
            } hover:shadow-[-8px_8px_0_0_#5441FF] active:shadow-[-3px_3px_0_0_#22246A] ${
              isActive ? 'translate-x-[8px]' : ''
            } duration-300 ease-out hover:translate-x-[8px] active:translate-x-[3px]
            `}
    >
      <span
        className={`leading-2 -rotate-45 text-center text-[1rem] group-hover:text-[#DEDCF9] md:text-base`}
      >
        {text}
      </span>
    </div>
  );
}
