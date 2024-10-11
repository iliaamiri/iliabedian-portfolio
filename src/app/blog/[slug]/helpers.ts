import { blogs } from '@/data/blogs';

export function getBlog(slug: string) {
  return blogs.find((b) => b.slug === slug) || null;
}
