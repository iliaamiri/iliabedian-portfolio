import {BlogPostHeader} from "@/components/StyledHeader";
import {blogs} from "@/lib/data/blogs";
import {Ubuntu} from "next/font/google";
import MDXBlogPost from './post.mdx';

const ubuntu = Ubuntu({subsets: ['latin'], weight: '400'})

export default function BlogPost() {
    const blog = blogs["deploy-dotnet-app-on-railway-with-docker"];
    return (
        <div>
            <BlogPostHeader>
                {blog.title}
            </BlogPostHeader>
            <div className={`flex flex-col items-center justify-center w-full ${ubuntu.className} markdown`} id={'readme'}>
                <div className={`w-9/12 md:w-7/12 pb-20`}>
                    <MDXBlogPost />
                </div>
            </div>
        </div>
    );
}
