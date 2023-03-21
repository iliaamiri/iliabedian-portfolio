import {Rowdies} from "next/font/google";

const rowdies = Rowdies({subsets: ['latin'], weight: '300'})

export function DiamondCube({text, containerClassName = ""}: { text: string, containerClassName?: string }) {
    return (
        <div
            className={`${rowdies.className} text-[#F9F4F1] h-20 w-20 md:h-32 md:w-32 rounded-lg bg-[#2D6A4F] rotate-45 flex justify-center items-center ${containerClassName}`}>
            <span
                className={`-rotate-45 text-center text-[0.45rem] leading-2 tb:text-[0.6rem] tb:leading-3 md:text-base`}>
                {text}
            </span>
        </div>
    );
}

interface DiamondCubeArtifactTypeProps {
    text: string,
    containerClassName?: string;
    onClick?: () => void;
}

export function DiamondCubeArtifactType({text, containerClassName, onClick}: DiamondCubeArtifactTypeProps) {
    return (
        <div onClick={onClick}
            className={`${rowdies.className} group cursor-pointer text-[#F9F4F1] h-20 w-20 md:h-32 md:w-32 rounded-lg bg-[#2D6A4F] rotate-45 flex justify-center items-center ${containerClassName}
            hover:shadow-[-8px_8px_0_0_#5441FF] active:shadow-[-3px_3px_0_0_#22246A] hover:translate-x-[8px] active:translate-x-[3px] ease-out duration-300
            `}>
            <span
                className={`-rotate-45 text-center text-[0.45rem] group-hover:text-[#DEDCF9] leading-2 tb:text-[0.6rem] tb:leading-3 md:text-base`}>
                {text}
            </span>
        </div>
    );
}
