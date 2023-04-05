'use client';
import {blogs} from "@/lib/data/blogs";
import MDXBlogPost from './post.mdx';
import {code} from "@/lib/code";
import {BlogPageWrapper} from "@/components/BlogPageWrapper";

export default function BlogPost() {
    const blog = blogs["server-side-events-on-nestjs-emitting-events-to-clients"];
    return (
        <BlogPageWrapper blog={blog}>
            <MDXBlogPost components={{code}} />
        </BlogPageWrapper>
    );
}
