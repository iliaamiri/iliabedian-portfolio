'use client';
import {BlogPostHeader} from "@/components/StyledHeader";
import {blogs} from "@/lib/data/blogs";
import {Roboto} from "next/font/google";
import MDXBlogPost from './post.mdx';
import {code} from "@/lib/code";

const roboto = Roboto({subsets: ['latin'], weight: '400'})

export default function BlogPost() {
    const blog = blogs["server-side-events-on-nestjs-emitting-events-to-clients"];
    return (
        <div>
            <BlogPostHeader>
                {blog.title}
            </BlogPostHeader>
            <div className={`flex flex-col items-center justify-center w-full ${roboto.className} markdown`} id={'readme'}>
                <div className={`w-9/12 md:w-7/12 pb-20`}>
                    <MDXBlogPost components={{code}} />
                </div>
            </div>
        </div>
    );
}
