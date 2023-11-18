'use client';
import Image from "next/image";
import Logo from "../../public/assets/logo/circle-new-green.svg";
import {ThreeDotsBurgerMenu} from "@/components/ThreeDots";
import Link from "next/link";
import {useEffect, useState} from "react";
import {MenuButton, SpecialMenuButton} from "./Buttons/MenuButton";
import {Rowdies} from "next/font/google";
import ScrollLink from "@/components/ScrollLink";
import {placeholdersBase64} from "@/lib/utils";

const rowdies = Rowdies({subsets: ['latin'], weight: '400'});

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

    const handleTouchEndMenuItem = () => setIsMenuOpen(false);

    return (
        <nav className={`flex w-full px-5 md:px-10 xl:px-52 pt-2 pb-1 justify-between backdrop-blur-sm fixed top-0 z-50 shadow-xl`}>
            <div className={`h-12 w-12 md:h-14 md:w-14 relative`}>
                <Link href={'/'}>
                    <Image src={Logo} alt={'Main Logo in Header navbar'} className={'rounded-full'} placeholder={'blur'} blurDataURL={"data:image/png;base64," + placeholdersBase64.green}/>
                </Link>
            </div>

            <div className={`flex justify-center items-center cursor-pointer`}>
                <ThreeDotsBurgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)} containerClassName={`lg:hidden flex rotate-[180deg]`} />

                <div className={`${isMenuOpen ? 'animate-slideInFromRight' : 'animate-slideOutToRight'} ${isHidden ? 'hidden' : ''} z-10 h-[100vh] absolute top-0 right-0 w-8/12 bg-gradient-to-b from-[#000000] via-[#19392A] to-[#2D6A4F] flex justify-center items-center`}>
                    <div className={`flex flex-row w-10/12`}>
                        <div className={`flex items-center`}>
                            <ThreeDotsBurgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)} containerClassName={`items-center justify-center h-max rotate-[270deg]`} />
                        </div>
                        <div className={`flex flex-col items-center w-full gap-10`}>
                            <Link href={"/"} onTouchEnd={handleTouchEndMenuItem} onClick={handleTouchEndMenuItem} className={`${rowdies.className} text-white text-2xl hover:text-secondaryDawn transition ease-in-out`}>Home</Link>
                            <ScrollLink scroll={false} href={`${origin}/#artifacts`} onTouchEnd={handleTouchEndMenuItem} onClick={handleTouchEndMenuItem} className={`${rowdies.className} text-white text-2xl hover:text-secondaryDawn transition ease-in-out`}>Showcases</ScrollLink>
                            <Link href={"/blog"} onTouchEnd={handleTouchEndMenuItem} onClick={handleTouchEndMenuItem} className={`${rowdies.className} text-white text-2xl hover:text-secondaryDawn transition ease-in-out`}>Blog</Link>
                            <Link href={"/about"} onTouchEnd={handleTouchEndMenuItem} onClick={handleTouchEndMenuItem} className={`${rowdies.className} text-white text-2xl hover:text-secondaryDawn transition ease-in-out`}>About</Link>
                            <ScrollLink scroll={false} href={`${origin}/#contact`} onTouchEnd={handleTouchEndMenuItem} onClick={handleTouchEndMenuItem} className={`${rowdies.className} text-white text-2xl hover:text-secondaryDawn transition ease-in-out`}>Contact</ScrollLink>
                            <ScrollLink scroll={false} href={`${origin}/#bangers`} onTouchEnd={handleTouchEndMenuItem} onClick={handleTouchEndMenuItem} className={`${rowdies.className} text-white text-2xl hover:text-secondaryDawn transition ease-in-out`}>Bangers</ScrollLink>
                        </div>
                    </div>
                </div>
                <div onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${isMenuOpen ? 'animate-fadeIn' : 'animate-fadeOut'} ${isHidden ? 'hidden' : ''} h-[100vh] fixed top-0 right-0 w-full backdrop-blur-[3px] bg-[#1F4735]/60`}>
                </div>
            </div>
            <div className={`hidden lg:flex justify-center items-center gap-3`}>
                <Link href={"/"}><MenuButton>Home</MenuButton></Link>
                <ScrollLink href={`${origin}/#artifacts`}><MenuButton>Showcases</MenuButton></ScrollLink>
                <Link href={"/blog"}><MenuButton>Blog</MenuButton></Link>
                <Link href={"/about"}><MenuButton>About</MenuButton></Link>
                <ScrollLink href={`${origin}/#contact`}><MenuButton>Contact</MenuButton></ScrollLink>
                <ScrollLink href={`${origin}/#bangers`}><SpecialMenuButton>Bangers</SpecialMenuButton></ScrollLink>
            </div>
        </nav>
    );
}
