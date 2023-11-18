import { BlogModel } from '@/lib/models';
import { PropsWithChildren } from 'react';
import { BlogPostHero } from '@/components/Blog/BlogPostHero';
import { MarkdownContainer } from '@/components/Markdown/MarkdownContainer';

export function BlogPageWrapper({
  coverImage,
  blog,
  children,
}: {
  blog: BlogModel;
  coverImage: any;
} & PropsWithChildren) {
  return (
    <div>
      <BlogPostHero blog={blog} coverImage={coverImage}>
        {blog.title}
      </BlogPostHero>
      <MarkdownContainer>{children}</MarkdownContainer>
    </div>
  );
}
