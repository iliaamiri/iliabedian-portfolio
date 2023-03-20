import {DiamondCube} from "@/components/DiamondCube";
import Link from "next/link";

export function Contact() {
    return (
        <div className={`flex justify-center w-full mb-32`}>
            <div className={`flex w-10/12 md:w-8/12 lg:w-5/12 justify-around pt-10`}>
                <Link href={'https://twitter.com/iliaaamiri'}>
                    <DiamondCube text={'Twitter'} containerClassName={`contactDiamondCube before:content-twitterIcon before:w-10 cursor-pointer`} />
                </Link>
                <Link href={'https://www.linkedin.com/in/eiliya-abedianamiri/'} >
                    <DiamondCube text={'LinkedIn'} containerClassName={`contactDiamondCube cursor-pointer`} />
                </Link>
                <Link href={'https://github.com/iliaamiri'} >
                    <DiamondCube text={'GitHub'} containerClassName={`contactDiamondCube before:content-githubIcon cursor-pointer`} />
                </Link>
            </div>
        </div>
    );
}
