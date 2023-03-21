import './globals.css';
import type { Metadata } from 'next';
import {MainHeader} from "@/components/MainHeader";

export const metadata: Metadata = {
    title: 'Ilia Abedianamiri',
    authors: {
        name: 'Eiliya Abedianamiri',
        url: 'https://iliaabedian.com',
    },
    applicationName: "Ilia Abedian's Portfolio and Blog",
    keywords: ['ilia', 'eiliya', 'abedianamiri', 'abedian', 'portfolio', 'blog', 'developer', 'software'],
    description: 'I\'m a full-stack web developer, web-master, and researcher learning new things and creating semi-enterprise projects for my individual clients.',
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
            <body>
                <MainHeader />
                <div className={`pt-40`}>
                    {children}
                </div>
            </body>
        </html>
    )
}
