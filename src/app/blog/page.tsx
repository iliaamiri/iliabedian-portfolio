import {BlogCard} from "@/components/BlogCard";
import {blogs} from "@/lib/data/blogs";

export default function BlogIndex() {
    return (
        <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full gap-5 items-stretch justify-items-center px-5`}>
            <BlogCard blog={blogs["1"]} />
        </div>
    );
}