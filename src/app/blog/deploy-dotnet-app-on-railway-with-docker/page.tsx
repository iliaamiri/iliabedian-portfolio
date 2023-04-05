'use client';
import {blogs} from "@/lib/data/blogs";
import MDXBlogPost from './post.mdx';
import {code} from "@/lib/code";
import {BlogPageWrapper} from "@/components/BlogPageWrapper";

export default function BlogPost() {
    const blog = blogs["deploy-dotnet-app-on-railway-with-docker"];
    return (
        <BlogPageWrapper blog={blog}>
            <MDXBlogPost components={{code}} />
        </BlogPageWrapper>
    );
}
