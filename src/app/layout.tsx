import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'iliaabedian.com',
    description: 'I\'m a full-stack web developer, web-master, and cybersecurity researcher learning new things and creating semi-enterprise projects for my individual clients.',
    icons: {
        icon: '/assets/logo/circle-cream.svg',
    }
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
