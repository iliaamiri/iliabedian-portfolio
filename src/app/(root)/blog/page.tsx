import { BlogCard } from '@/components/Blog/BlogCard';
import { blogs } from '@/data/blogs';
import { StyledHeader } from '@/components/StyledHeader';
import { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    title: "Ilia's Blogs & Articles",
    description:
      'Discover a treasure trove of knowledge, as this space is dedicated to exploring the world of ' +
      'coding in a fun and approachable way, sharing tips, tricks, and tutorials on a wide range of topics. \n' +
      'Learn from relatable experiences, pick up new techniques, and find inspiration to create your next masterpiece. ' +
      "Together, let's break the code and build a place where learning and creativity thrive!",
    keywords: 'ilia abedianamiri, blog, article, coding, web development',
  };
}

export default function BlogIndex() {
  return (
    <div className='-mt-20 md:mt-0'>
      <StyledHeader>Blogs & Articles</StyledHeader>
      <div
        className={`grid w-full grid-cols-1 items-stretch justify-items-center gap-16 px-5 pb-20 pt-10 lg:grid-cols-2 lg:gap-10 lg:px-40 xl:grid-cols-3 xl:gap-5`}
      >
        {blogs.map((b) => (
          <BlogCard blog={b} key={'blogCard' + b.slug} />
        ))}
      </div>
    </div>
  );
}
