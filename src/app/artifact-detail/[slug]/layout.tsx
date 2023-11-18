import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Loading } from '@/components/Loading';
import { getArtifact } from '@/app/artifact-detail/[slug]/helpers';

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const artifact = getArtifact(params.slug);
  if (artifact == null) {
    return {
      title: 'Page Not Found - 404',
      description: 'The page you are looking for does not exist.',
      keywords: '404, page not found, error',
      authors: {
        name: 'Eiliya Abedianamiri',
        url: 'https://iliabedian.com',
      },
    };
  }

  return {
    title: artifact.name,
    description: artifact.summaryText,
    keywords: ['Eiliya Abedianamiri', 'Ilia Abedianamiri'],
    authors: {
      name: 'Eiliya Abedianamiri',
      url: `https://iliabedian.com/artifact-detail/${artifact.slug}`,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}
