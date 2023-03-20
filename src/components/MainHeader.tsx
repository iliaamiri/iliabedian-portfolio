import Image from "next/image";
import Logo from "../../public/assets/logo/circle-green.svg";
import {MenuButton} from "@/components/Button";
import {ThreeDotsBurgerMenu} from "@/components/ThreeDots";
import Link from "next/link";

export function MainHeader({}: {}) {

    return (
        <nav className={`flex w-full px-10 md:px-40 pt-4 pb-3 justify-between backdrop-blur fixed top-0 z-50 shadow-xl`}>
            <div className={`h-14 w-14 md:h-20 md:w-20 relative`}>
                <Link href={'/'} >
                    <Image src={Logo} alt={'Main Logo in Header navbar'}/>
                </Link>
            </div>

            <div className={`flex justify-center items-center cursor-pointer`}>
                <ThreeDotsBurgerMenu containerClassName={`lg:hidden flex rotate-[180deg]`} />
                <div className={`h-full`}>

                </div>
            </div>
            <div className={`hidden lg:flex justify-center items-center gap-3`}>
                <Link href={""}><MenuButton>Back-End</MenuButton></Link>
                <Link href={""}><MenuButton>Blog</MenuButton></Link>
                <Link href={"#contact"} scroll={false}><MenuButton>Contact</MenuButton></Link>
            </div>
        </nav>
    );
}
