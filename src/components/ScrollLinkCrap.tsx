'use client';
import React, { PropsWithChildren } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>;
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;

export function ScrollLinkCrap({ children, ...props }: ScrollLinkProps) {
  const router = useRouter();
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    const [href, targetId] = e.currentTarget.href.split('#');
    if (href !== window.location.href) {
      router.push(e.currentTarget.href);
    }
    const elem = document.getElementById(targetId);
    if (elem !== null) {
      window.scrollTo({
        top: elem.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
    <Link {...props} onClick={handleScroll}>
      {children}
    </Link>
  );
}
