import {Rowdies} from "next/font/google";

const rowdies = Rowdies({subsets: ['latin'], weight: '300'})

interface DiamondCubeArtifactTypeProps {
    text: string,
    containerClassName?: string;
    onClick?: () => void;
    isActive?: boolean;
}

export function DiamondCube({text, containerClassName, onClick, isActive = false}: DiamondCubeArtifactTypeProps) {
    return (
        <div onClick={onClick}
            className={`${rowdies.className} group cursor-pointer text-[#F9F4F1] h-32 w-32 md:h-32 md:w-32 rounded-lg bg-primaryDawn rotate-45 flex justify-center items-center ${containerClassName}
            ${isActive ? 'shadow-[-8px_8px_0_0_#5441FF]' : ''} hover:shadow-[-8px_8px_0_0_#5441FF] active:shadow-[-3px_3px_0_0_#22246A] ${isActive ? 'translate-x-[8px]' : ''} hover:translate-x-[8px] active:translate-x-[3px] ease-out duration-300
            `}>
            <span
                className={`-rotate-45 text-center text-[1rem] group-hover:text-[#DEDCF9] leading-2 md:text-base`}>
                {text}
            </span>
        </div>
    );
}
