import {Rowdies} from "next/font/google";
import Link from "next/link";

interface Props {
    size?: 'small' | 'medium' | 'large';
    children?: any;
    className?: string;
}

const rowdies = Rowdies({subsets: ['latin'], weight: '400'})

export function MenuButton({link, className, ...otherProps}: { link: string, className?: string, children?: any; }) {
    return (
        <Link href={link}>
            <button
                    className={`${className} ${rowdies.className} rounded-xl border-[1px] border-[#52B788] bg-[#52B788] text-[#F9F4F1] hover:text-[#22246A] px-6 py-2 hover:shadow-[-5px_5px_0_0_#5441FF] active:shadow-[-3px_3px_0_0_#22246A] hover:translate-x-[5px] hover:translate-y-[-5px] active:translate-y-[-3px] active:translate-x-[3px] ease-out duration-300`} {...otherProps} />
        </Link>
    );
}

export function ArtifactActionButton({size, className = "", ...otherProps}: Props) {
    return (
        <button
                className={`${className} ${rowdies.className} rounded-xl border-[1px] border-[#52B788] text-[#C0B9F3] px-3 py-2 hover:shadow-[-8px_8px_0_0_#A198EE] active:shadow-[-4px_4px_0_0_#5441FF] hover:translate-x-[8px] hover:translate-y-[-8px] active:translate-y-[-4px] active:translate-x-[4px] ease-out duration-300`} {...otherProps} />
    );
}
