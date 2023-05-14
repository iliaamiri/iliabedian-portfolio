import {DiamondCube} from "@/components/DiamondCube";
import Link from "next/link";
import Script from "next/script";

export function Contact() {
    return (
        <div className={`flex flex-col justify-center items-center w-full mb-32`}>
            <div className={`flex w-10/12 md:w-8/12 lg:w-5/12 justify-around pt-10`}>
                <Link href={'https://twitter.com/iliaaamiri'} target={'_blank'}>
                    <DiamondCube text={'Twitter'} containerClassName={`grayscale hover:grayscale-0 contactDiamondCube bg-gradient-to-br from-[#1d9bf0] via-[#60a5fa] to-[#a5d8ff]  before:w-10 cursor-pointer`} />
                </Link>
                <Link href={'https://www.linkedin.com/in/eiliya-abedianamiri/'} target={'_blank'}>
                    <DiamondCube text={'LinkedIn'} containerClassName={`grayscale hover:grayscale-0 contactDiamondCube bg-gradient-to-br from-[#0b66c3] via-[#3b82f6] to-[#93c5fd] cursor-pointer`} />
                </Link>
                <Link href={'https://github.com/iliaamiri'} target={'_blank'}>
                    <DiamondCube text={'GitHub'} containerClassName={`grayscale hover:grayscale-0 contactDiamondCube  bg-gradient-to-br from-[#24292e] via-[#0366d6] to-[#f6f8fa] cursor-pointer`} />
                </Link>
            </div>
            <div className={`flex w-7/12 md:w-5/12 lg:w-3/12 justify-around pt-10`}>
                <Link className={'mailtoui'} href="mailto:iliaabedianamiri@gmail.com">
                    <DiamondCube text={'Email Me'} containerClassName={`grayscale hover:grayscale-0 contactDiamondCube bg-gradient-to-br from-[#A198EE] via-[#2D6A4F] to-[#48AD7E] before:w-10 cursor-pointer`} />
                </Link>
                <Link href={'/'} className={'opacity-0'}>
                    <DiamondCube text={'YouTube'} containerClassName={`grayscale hover:grayscale-0 contactDiamondCube bg-gradient-to-br from-[#22246A] via-[#2D6A4F] to-[#48AD7E] cursor-pointer`} />
                </Link>
            </div>
            <Script async={true} src={'https://cdn.jsdelivr.net/npm/mailtoui@1.0.3/dist/mailtoui-min.js'} />
        </div>
    );
}
