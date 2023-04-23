import {blogs} from "@/lib/data/blogs";

export function getBlog(slug: string) {
    return blogs[slug] || null;
}
