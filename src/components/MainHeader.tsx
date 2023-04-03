'use client';
import Image from "next/image";
import Logo from "../../public/assets/logo/circle-green.svg";
import {ThreeDotsBurgerMenu} from "@/components/ThreeDots";
import Link from "next/link";
import {useEffect, useState} from "react";
import { MenuButton } from "./Buttons/MenuButton";
import {Rowdies} from "next/font/google";
import ScrollLink from "@/components/ScrollLink";

const rowdies = Rowdies({subsets: ['latin'], weight: '400'})

export function MainHeader({}: {}) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(true);
    const [origin, setOrigin] = useState<string>('');

    useEffect(() => {
        setOrigin(window.location.origin);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            setIsHidden(false);
        } else {
            setTimeout(() => {
                setIsHidden(true);
            }, 450);
        }
    }, [isMenuOpen]);

    return (
        <nav className={`flex px-10 md:px-40 pt-4 pb-3 justify-between backdrop-blur fixed top-0 z-50 shadow-xl`}>
            <div className={`h-14 w-14 md:h-20 md:w-20 relative`}>
                <Link href={'/'} >
                    <Image src={Logo} alt={'Main Logo in Header navbar'}/>
                </Link>
            </div>

            <div className={`flex justify-center items-center cursor-pointer`}>
                <ThreeDotsBurgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)} containerClassName={`lg:hidden flex rotate-[180deg]`} />

                <div className={`${isMenuOpen ? 'animate-slideInFromRight' : 'animate-slideOutToRight'} ${isHidden ? 'hidden' : ''} z-10 h-[100vh] absolute top-0 right-0 w-8/12 bg-gradient-to-b from-[#000000] via-[#19392A] to-[#2D6A4F] flex justify-center items-center`}>
                    <div className={`flex flex-row w-10/12`}>
                        <ThreeDotsBurgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)} containerClassName={`flex justify-center rotate-[270deg]`} />
                        <div className={`flex flex-col items-center w-full gap-10`}>
                            <Link href={"/"} onTouchEnd={() => setIsMenuOpen(false)} className={`${rowdies.className} text-white text-2xl hover:text-[#5441FF] transition ease-in-out`}>Home</Link>
                            <Link href={"/blog"} onTouchEnd={() => setIsMenuOpen(false)} className={`${rowdies.className} text-white text-2xl hover:text-[#5441FF] transition ease-in-out`}>Blog</Link>
                            <ScrollLink scroll={false} href={`${origin}/#contact`} onTouchEnd={() => setIsMenuOpen(false)} className={`${rowdies.className} text-white text-2xl hover:text-[#5441FF] transition ease-in-out`}>Contact</ScrollLink>
                        </div>
                    </div>
                </div>
                <div onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${isMenuOpen ? 'animate-fadeIn' : 'animate-fadeOut'} ${isHidden ? 'hidden' : ''} h-[100vh] fixed top-0 right-0 w-full backdrop-blur-[3px] bg-[#1F4735]/60`}>
                </div>
            </div>
            <div className={`hidden lg:flex justify-center items-center gap-3`}>
                <Link href={"/"}><MenuButton>Home</MenuButton></Link>
                <Link href={"/blog"}><MenuButton>Blog</MenuButton></Link>
                <ScrollLink href={`${origin}/#contact`}><MenuButton>Contact</MenuButton></ScrollLink>
            </div>
        </nav>
    );
}
