import { blogs } from '@/data/blogs';

export function getBlog(slug: string) {
  return blogs[slug] || null;
}
