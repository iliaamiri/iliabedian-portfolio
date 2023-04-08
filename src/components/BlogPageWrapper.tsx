import {BlogModel} from "@/lib/models";
import {PropsWithChildren} from "react";
import {BlogPostHeader} from "@/components/BlogPostHeader";
import {Roboto} from "next/font/google";

const roboto = Roboto({subsets: ['latin'], weight: '400'});

export function BlogPageWrapper({coverImage, blog, children}: {blog: BlogModel, coverImage: any} & PropsWithChildren) {
    return (
        <div>
            <BlogPostHeader blog={blog} coverImage={coverImage}>
                {blog.title}
            </BlogPostHeader>
            <div className={`flex flex-col items-center justify-center w-full ${roboto.className} markdown`} id={'readme'}>
                <div className={`w-11/12 md:w-9/12 lg:w-7/12 xl:w-6/12 pb-20`}>
                    {children}
                </div>
            </div>
        </div>
    );
}
