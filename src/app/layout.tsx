import './globals.css';
import type { Metadata } from 'next';
import {MainHeader} from "@/components/MainHeader";
import Script from "next/script";
import {Contact} from "@/app/contact";

export const metadata: Metadata = {
    title: 'Ilia Abedianamiri',
    authors: {
        name: 'Eiliya Abedianamiri',
        url: 'https://iliaabedian.com',
    },
    applicationName: "Ilia Abedian's Portfolio and Blog",
    keywords: ['ilia', 'eiliya', 'abedianamiri', 'abedian', 'portfolio', 'blog', 'developer', 'software engineer'],
    description: 'Full-stack developer, software engineer, and researcher learning new things and building cool projects. Welcome to my portfolio.',
    icons: {
        icon: '/assets/logo/circle-cream.svg',
    },
    viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-LYM0RN6N2X" />
                <Script id='google-analytics'
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-LYM0RN6N2X');`}} />
                {/* doesn't work in next/script */}
                {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                <script
                        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
                        data-name="BMC-Widget"
                        data-cfasync="false"
                        data-id="iliabedian"
                        data-description="Support me on Buy me a coffee!"
                        data-message="" data-color="#40DCA5" data-position="Right" data-x_margin="18" data-y_margin="18" />
            </head>
            <body>
                <MainHeader />
                <div className={`pt-40`}>
                    {children}

                    <Contact />
                </div>
            </body>
        </html>
    )
}
