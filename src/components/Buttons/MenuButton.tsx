import {Rowdies} from "next/font/google";

const rowdies = Rowdies({subsets: ['latin'], weight: '400'});

export function MenuButton({className = '', ...otherProps}: { className?: string, children?: any; }) {
    return (
        <button
            className={`${className} ${rowdies.className} rounded-xl border-[1px] border-[#48AD7E] bg-[#52B788] text-[#F9F4F1] hover:text-[#22246A] px-6 py-2 hover:shadow-[-5px_5px_0_0_#5441FF] active:shadow-[-3px_3px_0_0_#22246A] hover:translate-x-[5px] hover:translate-y-[-5px] active:translate-y-[-3px] active:translate-x-[3px] ease-out duration-300`} {...otherProps} />
    );
}
