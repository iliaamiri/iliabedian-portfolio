import {BlogModel} from "@/lib/models";
import {PropsWithChildren} from "react";
import {BlogPostHeader} from "@/components/StyledHeader";
import {Roboto} from "next/font/google";

const roboto = Roboto({subsets: ['latin'], weight: '400'});

export function BlogPageWrapper({blog, children}: {blog: BlogModel} & PropsWithChildren) {
    return (
        <div>
            <BlogPostHeader>
                {blog.title}
            </BlogPostHeader>
            <div className={`flex flex-col items-center justify-center w-full ${roboto.className} markdown`} id={'readme'}>
                <div className={`w-9/12 md:w-9/12 pb-20`}>
                    {children}
                </div>
            </div>
        </div>
    );
}
