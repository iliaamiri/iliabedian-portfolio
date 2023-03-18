import {Rowdies} from "next/font/google";

interface Props {
    size?: 'small' | 'medium' | 'large';
    children?: any;
    className?: string;
}

const rowdies = Rowdies({subsets: ['latin'], weight: '400'})

export function ArtifactActionButton({size, className = "", ...otherProps}: Props) {
    return (
        <button className={`${className} ${rowdies.className} rounded-xl border-[1px] border-[#52B788] text-[#C0B9F3] px-3 py-2 hover:shadow-[-8px_8px_0_0_#A198EE] active:shadow-[-4px_4px_0_0_#5441FF] hover:translate-x-[8px] hover:translate-y-[-8px] active:translate-y-[-4px] active:translate-x-[4px] ease-out duration-300`} {...otherProps} />
    );
}
