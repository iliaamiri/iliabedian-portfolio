'use client';
import MDXBlogPost from './post.mdx';
import {code} from "@/lib/code";
import {BlogPageWrapper} from "@/components/BlogPageWrapper";
import CoverImage from "@/app/blog/server-side-events-on-nestjs-emitting-events-to-clients/assets/cover.png";
import blog from "@/app/blog/server-side-events-on-nestjs-emitting-events-to-clients/blog";

export default function BlogPost() {
    return (
        <BlogPageWrapper coverImage={CoverImage.src} blog={blog}>
            <MDXBlogPost components={{code}} />
        </BlogPageWrapper>
    );
}
