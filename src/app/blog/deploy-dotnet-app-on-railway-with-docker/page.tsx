'use client';
import {blogs} from "@/lib/data/blogs";
import MDXBlogPost from './post.mdx';
import {code} from "@/lib/code";
import {BlogPageWrapper} from "@/components/BlogPageWrapper";
import CoverImage from "@/app/blog/deploy-dotnet-app-on-railway-with-docker/assets/cover.png";
import blog from "@/app/blog/deploy-dotnet-app-on-railway-with-docker/blog";

//
// <Head>
//     <title>{blog.title}</title>
//     <meta name="description" content={blog.description} />
//     <meta name="keywords" content={blog.keywords.join(',')} />
//     <meta name="author" content={'Eiliya Abedianamiri'} />
// </Head>

export default function BlogPost() {
    return (
        <BlogPageWrapper coverImage={CoverImage.src} blog={blog}>
            <MDXBlogPost components={{code}}/>
        </BlogPageWrapper>
    );
}
