import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'About Me',
    authors: {
        name: 'Eiliya Abedianamiri',
        url: 'https://iliaabedian.com/about',
    },
    keywords: ['eiliya abedianamiri', 'ilia abedianamiri', 'abedian', 'about me', 'developer', 'software engineer'],
}

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        {children}
    )
}
