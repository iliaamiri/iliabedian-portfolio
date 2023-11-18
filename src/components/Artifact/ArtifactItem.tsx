'use client';
import { ArtifactModel } from '@/lib/models';
import { randomIntFromInterval } from '@/lib/utils';
import { ArtifactItemOnRight } from '@/components/Artifact/ArtifactItemOnRight';
import { ArtifactItemOnLeft } from '@/components/Artifact/ArtifactItemOnLeft';
import { Suspense } from 'react';
import { Loading } from '@/components/Loading';

export function ArtifactItem({
  artifact,
  isOnRight = true,
}: {
  artifact: ArtifactModel;
  isOnRight: boolean;
}) {
  const firstSeparatorWidth = randomIntFromInterval(15, 70);
  const secondSeparatorWidth = 100 - firstSeparatorWidth;

  return (
    <Suspense fallback={<Loading />}>
      {isOnRight
        ? ArtifactItemOnRight({ artifact })
        : ArtifactItemOnLeft({ artifact })}
      <div className={`flex w-full flex-row gap-6 px-5 pb-5`}>
        <div
          style={{
            width: `${firstSeparatorWidth}%`,
          }}
          className={`h-[0.6rem] rounded-full bg-[#A198EE]`}
        ></div>
        <div
          style={{
            width: `${secondSeparatorWidth}%`,
          }}
          className={`h-[0.6rem] rounded-full bg-[#22246A]`}
        ></div>
      </div>
    </Suspense>
  );
}
