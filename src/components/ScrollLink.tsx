'use client';
import React, { PropsWithChildren } from 'react';

export default function ScrollLink({
  children,
  id,
  ...props
}: PropsWithChildren & {
  id: string;
  className?: string;
  onTouchEnd?: any;
  onClick?: any;
}) {
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
