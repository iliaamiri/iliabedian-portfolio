import {Rowdies} from "next/font/google";

const rowdies = Rowdies({subsets: ['latin'], weight: '300'})

interface Header1Props {

}

export function StyledHeader({...otherProps}: Header1Props) {

    return (
        <div className={`flex w-full justify-center`}>
            <div className={``}>
                <h1 className={`${rowdies.className} text-5xl md:text-[5.252rem]`} {...otherProps} />
            </div>
        </div>
    );
}
