import {BlogCard} from "@/components/Blog/BlogCard";
import {blogs} from "@/lib/data/blogs";
import {StyledHeader} from "@/components/StyledHeader";
import {Metadata} from "next";

export function generateMetadata(): Metadata {
    return {
        title: "Ilia's Blogs & Articles",
        description: "Discover a treasure trove of knowledge, as this space is dedicated to exploring the world of " +
            "coding in a fun and approachable way, sharing tips, tricks, and tutorials on a wide range of topics. \n" +
            "Learn from relatable experiences, pick up new techniques, and find inspiration to create your next masterpiece. " +
            "Together, let's break the code and build a place where learning and creativity thrive!",
        keywords: "ilia abedianamiri, blog, article, coding, web development",
    }
}

const BlogCards = Object.values(blogs)
    .sort((b1, b2) => b2.id - b1.id)
    .map(blog => <BlogCard blog={blog} key={'blogCard' + blog.slug} />);

export default function BlogIndex() {
    return (
        <div>
            <StyledHeader>
                Blogs & Articles
            </StyledHeader>
            <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full gap-16 lg:gap-10 xl:gap-5 items-stretch justify-items-center px-5 pt-10 pb-20 lg:px-40`}>
                {BlogCards}
            </div>
        </div>
    );
}
