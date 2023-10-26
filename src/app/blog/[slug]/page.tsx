'use client';
import {useParams} from "next/navigation";
import {code} from "@/lib/code";
import {BlogPageWrapper} from "@/components/Blog/BlogPageWrapper";
import {getBlog} from "@/app/blog/[slug]/helpers";
import dynamic from "next/dynamic";
import {DynamicOptions} from "next/dist/shared/lib/dynamic";
import {NotFound} from "@/components/Errors/404";

export default function BlogPost() {
    const params = useParams();

    const blog = getBlog(params.slug as string);
    if (blog == null) {
        return <NotFound />;
    }

    const MDXBlogPost = dynamic(() => import(
        /* webpackInclude: /\.mdx$/ */
        `@/data/posts/${params.slug}/post.mdx`
        ), {
        ssr: true,
    } as DynamicOptions<{}>);

    return (
        <BlogPageWrapper coverImage={`/assets/blogs/${blog.slug}/post-cover.png`} blog={blog}>
            {/* @ts-ignore - dynamic import doesn't understand .MDX types */}
            <MDXBlogPost components={{code}} />
        </BlogPageWrapper>
    );
}
