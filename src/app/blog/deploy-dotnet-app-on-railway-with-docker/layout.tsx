import {blogs} from "@/lib/data/blogs";
import type { Metadata } from 'next';
import blog from "@/app/blog/deploy-dotnet-app-on-railway-with-docker/blog";

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
