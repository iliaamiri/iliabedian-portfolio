import {Rowdies} from "next/font/google";

const rowdies = Rowdies({subsets: ['latin'], weight: '300'})

export function DiamondCube({text, containerClassName = ""}: {text: string, containerClassName?: string}) {
    return (
        <div className={`${rowdies.className} text-[#F9F4F1] h-20 w-20 md:h-32 md:w-32 rounded-lg bg-[#2D6A4F] rotate-45 flex justify-center items-center ${containerClassName}`}>
            <span className={`-rotate-45 text-center`}>
                {text}
            </span>
        </div>
    );
}
