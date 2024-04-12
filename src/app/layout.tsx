import './globals.css';
import type { Metadata } from 'next';
import { MainHeader } from '@/components/MainHeader';
import Script from 'next/script';
import { Contact } from '@/app/_Contact';
import { Bangers } from '@/app/_Bangers';
import { StyledHeader } from '@/components/StyledHeader';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Eiliya Abedianamiri',
  authors: {
    name: 'Eiliya Abedianamiri',
    url: 'https://iliaabedian.com',
  },
  applicationName: "Eiliya's Portfolio and Blog",
  keywords: [
    'eiliya abedianamiri',
    'ilia abedianamiri',
    'abedian',
    'abedianamiri',
    'portfolio',
    'blog',
    'developer',
    'software engineer',
    'software programmer',
  ],
  description:
    'Full-stack developer and software programmer avidly learning new things and building cool projects. Welcome to my portfolio.',
  icons: {
    icon: '/assets/logo/circle-cream.svg',
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <head>
        <Script
          strategy='afterInteractive'
          src='https://www.googletagmanager.com/gtag/js?id=G-LYM0RN6N2X'
        />
        <Script
          id='google-analytics'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-LYM0RN6N2X');`,
          }}
        />
      </head>
      <body>
        <MainHeader />
        <div className={`pt-40`}>
          {children}

          <StyledHeader id={'contact'}>Contact</StyledHeader>
          <Contact />

          <Bangers />
        </div>
      </body>
    </html>
  );
}
