import {BlogCard} from "@/components/BlogCard";
import {blogs} from "@/lib/data/blogs";
import {StyledHeader} from "@/components/StyledHeader";

export default function BlogIndex() {
    return (
        <div>
            <StyledHeader>
                Blogs & Articles
            </StyledHeader>
            <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full gap-16 lg:gap-5 items-stretch justify-items-center px-5 pt-10 pb-20 lg:px-40`}>
                <BlogCard blog={blogs["server-side-events-on-nestjs-emitting-events-to-clients"]} />
                <BlogCard blog={blogs["deploy-dotnet-app-on-railway-with-docker"]} />
            </div>
        </div>
    );
}
