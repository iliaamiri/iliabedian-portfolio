import {Rowdies} from "next/font/google";
import {ThreeDots} from "@/components/ThreeDots";
import exp from "constants";

const rowdies = Rowdies({subsets: ['latin'], weight: '300'})

interface Header1Props {
    children?: any;
    id?: string;
}

export function StyledHeader({...otherProps}: Header1Props) {

    return (
        <div className={`flex w-full justify-center`}>
            <div className={``}>
                <h1 className={`${rowdies.className} text-5xl md:text-[5.252rem]`} {...otherProps} />
                <ThreeDots containerClassName={`relative bottom-3 md:bottom-5 right-5 md:right-7 -z-10`} />
            </div>
        </div>
    );
}

export function BlogPostHeader({...otherProps}: Header1Props) {
    return (
        <div className={`flex w-full justify-center`}>
            <div className={`w-9/12 md:w-7/12`}>
                <h1 className={`${rowdies.className} text-5xl md:text-[5.252rem]`} {...otherProps} />
                <ThreeDots containerClassName={`relative bottom-3 md:bottom-5 right-5 md:right-7 -z-10`} />
            </div>
        </div>
    );
}
