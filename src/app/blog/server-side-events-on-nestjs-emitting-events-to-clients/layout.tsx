import {Metadata} from "next";
import blog from "@/app/blog/server-side-events-on-nestjs-emitting-events-to-clients/blog";

export const metadata: Metadata = {
    title: blog.title,
    description: blog.description,
    keywords: blog.keywords.join(','),
    authors: {
        name: 'Eiliya Abedianamiri',
        url: 'https://iliabedian.com',
    }
}

export default function Layout({children}: { children: React.ReactNode }) {
    return children
}
