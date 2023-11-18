import { ArtifactModel } from '@/lib/models';
import { SkillBadgeRow } from '@/components/SkillBadgeRow';
import { AestheticRender } from '@/components/AestheticRender';
import { ArtifactActionButton } from '@/components/Buttons/ArtifactActionButton';
import Link from 'next/link';
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '500' });

export function ArtifactItemOnLeft({ artifact }: { artifact: ArtifactModel }) {
  return (
    <div className={`flex w-full flex-col-reverse justify-end md:flex-row`}>
      {/* diamond (rotated div) */}
      <div
        className={`flex max-h-[580px] w-full flex-row items-center justify-center pt-5 md:w-5/12 md:pt-60`}
      >
        <div className={`relative w-fit self-center justify-self-center`}>
          <div
            className={`absolute top-0 z-10 flex h-[400px] w-[400px] shrink-0 grow-0 -rotate-[35deg] flex-col justify-between overflow-hidden rounded-2xl bg-primaryDawn`}
          >
            <div>
              <SkillBadgeRow
                technologies={artifact.technologies[0].list}
                shouldMarquee={artifact.technologies[0].shouldMarquee}
              />
              <SkillBadgeRow
                technologies={artifact.technologies[1].list}
                shouldMarquee={artifact.technologies[1].shouldMarquee}
              />
            </div>

            <div className={`relative`}>
              <div className={`flex flex-col gap-3 whitespace-nowrap`}>
                {AestheticRender()}
                {AestheticRender()}
                {AestheticRender()}
                {AestheticRender()}
              </div>
            </div>

            <div className={`flex justify-center gap-10 pb-10`}>
              <ArtifactActionButton
                size={'medium'}
                className={`button-view-on-github relative z-10 after:content-githubIcon`}
              >
                <Link href={artifact.githubUrl ?? ''} target={'_blank'}>
                  View on GitHub
                </Link>
              </ArtifactActionButton>

              <ArtifactActionButton
                size={'medium'}
                className={`button-view-demo relative z-10 after:content-['🚀']`}
              >
                <Link href={artifact.demoUrl ?? ''} target={'_blank'}>
                  View Demo
                </Link>
              </ArtifactActionButton>
            </div>
          </div>
          <div
            className={`relative right-6 top-[75px] h-[350px] w-[350px] shrink-0 grow-0 rotate-45 rounded-2xl bg-primaryDawn bg-opacity-70`}
          ></div>
          <div
            style={{
              top: '-200px',
            }}
            className={`relative right-8 h-[300px] w-[300px] shrink-0 grow-0 rotate-45 rounded-2xl bg-primaryDawn bg-opacity-50`}
          ></div>
        </div>
      </div>

      <div
        className={`z-30 flex w-full flex-col items-start justify-start pt-10 md:w-7/12`}
      >
        <div
          className={`md-w-11/12 flex w-full flex-col items-center justify-center`}
        >
          <div
            onClick={() => {
              document
                .querySelector('#readme')
                ?.previousElementSibling?.scrollIntoView({
                  behavior: 'smooth',
                });
            }}
            className={`w-11/12 cursor-pointer duration-300 ease-in-out hover:scale-[1.03] md:w-9/12`}
          >
            <div
              style={{
                backgroundImage: `url(/assets/mockups/${artifact.slug}.jpg)`,
              }}
              className={`flex aspect-video w-full justify-center justify-self-center rounded-3xl bg-cover bg-no-repeat md:w-full`}
            ></div>
            <div
              className={`relative -top-20 flex w-full flex-col rounded-b-2xl p-5 pt-20 text-black md:w-full md:p-9 md:pt-20`}
            >
              <p className={`${ubuntu.className} pt-2`}>
                {artifact.summaryText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
