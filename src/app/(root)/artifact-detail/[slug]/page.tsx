'use client';
import { useParams } from 'next/navigation';
import { NotFound } from '@/components/Errors/404';
import { getArtifact } from '@/app/(root)/artifact-detail/[slug]/helpers';
import dynamic from 'next/dynamic';
import { DynamicOptions } from 'next/dist/shared/lib/dynamic';
import { StyledHeader } from '@/components/StyledHeader';
import { ArtifactItem } from '@/components/Artifact/ArtifactItem';
import { Roboto } from 'next/font/google';
import { code } from '@/lib/code';
import { MarkdownContainer } from '@/components/Markdown/MarkdownContainer';

export default function ArtifactDetail() {
  const params = useParams();

  const artifact = getArtifact(params.slug as string);
  if (artifact == null) {
    return <NotFound />;
  }

  const MDXContent = dynamic(
    () =>
      import(
        /* webpackInclude: /\.mdx$/ */
        `@/data/artifacts/${params.slug}/content.mdx`
      ),
    {
      ssr: true,
    } as DynamicOptions<{}>
  );

  return (
    <div className='-mt-20 md:mt-0'>
      <StyledHeader>{artifact.name}</StyledHeader>
      <ArtifactItem artifact={artifact} isOnRight={artifact.id % 2 === 0} />
      <MarkdownContainer>
        {/* @ts-ignore - dynamic import doesn't understand .MDX types */}
        <MDXContent components={{ code }} />
      </MarkdownContainer>
    </div>
  );
}
