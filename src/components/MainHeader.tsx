'use client';
import Image from 'next/image';
import Logo from '../../public/assets/logo/circle-new-green.svg';
import { ThreeDotsBurgerMenu } from '@/components/ThreeDots';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MenuButton, SpecialMenuButton } from './Buttons/MenuButton';
import { Rowdies } from 'next/font/google';
import ScrollLink from '@/components/ScrollLink';
import { placeholdersBase64 } from '@/lib/utils';

const rowdies = Rowdies({ subsets: ['latin'], weight: '400' });

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
    <nav
      className={`fixed top-0 z-50 flex w-full justify-between px-5 pb-1 pt-2 shadow-xl backdrop-blur-sm md:px-10 xl:px-52`}
    >
      <div className={`relative h-12 w-12 md:h-14 md:w-14`}>
        <Link href={'/'}>
          <Image
            src={Logo}
            alt={'Main Logo in Header navbar'}
            className={'rounded-full'}
            placeholder={'blur'}
            blurDataURL={'data:image/png;base64,' + placeholdersBase64.green}
          />
        </Link>
      </div>

      <div className={`flex cursor-pointer items-center justify-center`}>
        <ThreeDotsBurgerMenu
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          containerClassName={`lg:hidden flex rotate-[180deg]`}
        />

        <div
          className={`${
            isMenuOpen ? 'animate-slideInFromRight' : 'animate-slideOutToRight'
          } ${
            isHidden ? 'hidden' : ''
          } absolute right-0 top-0 z-10 flex h-[100vh] w-8/12 items-center justify-center bg-gradient-to-b from-[#000000] via-[#19392A] to-[#2D6A4F]`}
        >
          <div className={`flex w-10/12 flex-row`}>
            <div className={`flex items-center`}>
              <ThreeDotsBurgerMenu
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                containerClassName={`items-center justify-center h-max rotate-[270deg]`}
              />
            </div>
            <div className={`flex w-full flex-col items-center gap-10`}>
              <Link
                href={'/'}
                onTouchEnd={handleTouchEndMenuItem}
                onClick={handleTouchEndMenuItem}
                className={`${rowdies.className} text-2xl text-white transition ease-in-out hover:text-secondaryDawn`}
              >
                Home
              </Link>
              <ScrollLink
                id={`#artifacts`}
                onTouchEnd={handleTouchEndMenuItem}
                onClick={handleTouchEndMenuItem}
                className={`${rowdies.className} text-2xl text-white transition ease-in-out hover:text-secondaryDawn`}
              >
                Showcases
              </ScrollLink>
              <Link
                href={'/blog'}
                onTouchEnd={handleTouchEndMenuItem}
                onClick={handleTouchEndMenuItem}
                className={`${rowdies.className} text-2xl text-white transition ease-in-out hover:text-secondaryDawn`}
              >
                Blog
              </Link>
              <Link
                href={'/about'}
                className={`${rowdies.className} text-2xl text-white transition ease-in-out hover:text-secondaryDawn`}
              >
                About
              </Link>
              <ScrollLink
                id={`#contact`}
                onTouchEnd={handleTouchEndMenuItem}
                onClick={handleTouchEndMenuItem}
                className={`${rowdies.className} text-2xl text-white transition ease-in-out hover:text-secondaryDawn`}
              >
                Contact
              </ScrollLink>
              <ScrollLink
                id={`#bangers`}
                onTouchEnd={handleTouchEndMenuItem}
                onClick={handleTouchEndMenuItem}
                className={`${rowdies.className} text-2xl text-white transition ease-in-out hover:text-secondaryDawn`}
              >
                Bangers
              </ScrollLink>
            </div>
          </div>
        </div>
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`${isMenuOpen ? 'animate-fadeIn' : 'animate-fadeOut'} ${
            isHidden ? 'hidden' : ''
          } fixed right-0 top-0 h-[100vh] w-full bg-[#1F4735]/60 backdrop-blur-[3px]`}
        ></div>
      </div>
      <div className={`hidden items-center justify-center gap-3 lg:flex`}>
        <Link href={'/'}>
          <MenuButton>Home</MenuButton>
        </Link>
        <ScrollLink id={`#artifacts`}>
          <MenuButton>Showcases</MenuButton>
        </ScrollLink>
        <Link href={'/blog'}>
          <MenuButton>Blog</MenuButton>
        </Link>
        <Link href={'/about'}>
          <MenuButton>About</MenuButton>
        </Link>
        <ScrollLink id={`#contact`}>
          <MenuButton>Contact</MenuButton>
        </ScrollLink>
        <ScrollLink id={`#bangers`}>
          <SpecialMenuButton>Bangers</SpecialMenuButton>
        </ScrollLink>
      </div>
    </nav>
  );
}
