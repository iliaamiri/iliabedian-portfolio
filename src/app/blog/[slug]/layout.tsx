import type { Metadata } from 'next';
import {getBlog} from "@/app/blog/[slug]/helpers";
import {Suspense} from "react";
import {Contact} from "@/app/contact";

export function generateMetadata({ params }: { params: { slug: string }}): Metadata {
    const blog = getBlog(params.slug);
    if (blog == null) {
        return {
            title: 'Page Not Found - 404',
            description: 'The page you are looking for does not exist.',
            keywords: '404, page not found, error',
            authors: {
                name: 'Eiliya Abedianamiri',
                url: 'https://iliabedian.com',
            }
        }
    }

    return {
        title: blog.title,
        description: blog.description,
        keywords: blog.keywords.join(','),
        authors: {
            name: 'Eiliya Abedianamiri',
            url: 'https://iliabedian.com',
        }
    }
}

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            {children}
        </Suspense>
    )
}
