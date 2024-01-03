'use client';
import React, { PropsWithChildren } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type Props = PropsWithChildren & {
  redirect?: boolean;
  id: string;
  className?: string;
  onTouchEnd?: any;
  onClick?: any;
  href?: string;
};

export default function ScrollLink({
  redirect = false,
  href,
  children,
  id,
  ...props
}: Props) {
  if (redirect) {
    return (
      <WithRedirect
        redirect={redirect}
        id={id}
        {...props}
        href={href!}
        children={children}
      />
    );
  }

  const handleScroll = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();

    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div {...props} onClick={handleScroll}>
      {children}
    </div>
  );
}

function WithRedirect({
  children,
  redirect,
  ...props
}: Props & { href: string }) {
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
