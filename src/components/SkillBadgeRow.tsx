import { TechnologyModel } from '@/lib/models';
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '500' });

export function SkillBadgeRow({
  technologies,
  shouldMarquee,
}: {
  technologies: TechnologyModel[];
  shouldMarquee?: boolean;
}) {
  const RenderTechnologies = () =>
    technologies.map((technology, index) => (
      <SkillBadge key={`skill${index}`} technology={technology} />
    ));

  return (
    <div className={`relative`}>
      <div
        style={{
          animationDirection: shouldMarquee ? 'alternate-reverse' : 'normal',
        }}
        className={`mt-6 flex flex-row gap-2 ${
          shouldMarquee ? 'animate-marquee' : ''
        }`}
      >
        {RenderTechnologies()}
      </div>

      {/*{shouldMarquee && (*/}
      {/*<div className={`flex flex-row gap-2 mt-6 absolute top-0 animate-marquee2 whitespace-nowrap`}>*/}
      {/*    {RenderTechnologies()}*/}
      {/*</div>)}*/}
    </div>
  );
}

export function SkillBadge({ technology }: { technology: TechnologyModel }) {
  return (
    <div
      className={`group inline-block w-fit cursor-default rounded border-[0.0002rem] bg-backgroundDawn pt-1 duration-300 ease-in-out hover:scale-[1.05]`}
    >
      <span className={`px-5 ${ubuntu.className} whitespace-nowrap`}>
        {technology.skillName}
      </span>

      <div
        className={`h-[0.3rem] bg-skillConfidenceDawn w-[${technology.confidenceLevel}%] mt-1 rounded duration-300 ease-in-out group-hover:bg-secondaryDawn`}
      ></div>
    </div>
  );
}
