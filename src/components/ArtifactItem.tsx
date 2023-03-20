import {ArtifactModel} from "@/lib/models";
import {SkillBadgeRow} from "@/components/SkillBadgeRow";
import {Rowdies, Ubuntu} from "next/font/google";
import {XSThreeDots} from "@/components/ThreeDots";
import {ArtifactActionButton} from "@/components/Button";
import {randomIntFromInterval} from "@/lib/utils";
import Link from "next/link";

const ubuntu = Ubuntu({subsets: ['latin'], weight: '500'})
const rowdiesBold = Rowdies({subsets: ['latin'], weight: '700'})

const AestheticRender = () => {
    const render = [];
    for (let i = 0; i < 10; i++) {
        render.push(
            <div
                style={{
                    backgroundColor: `#${i % 2 == 0 ? 'A198EE' : '22246A'}`,
                    width: `${randomIntFromInterval(30, 150)}px`,
                }}
                className={`w-fit h-[0.6rem] shrink-0 rounded-full`}></div>
        );
    }

    return (
        <div className={`relative`}>
            <div className={`flex flex-row gap-3 animate-marquee`}>
                {render}
            </div>
            <div className={`flex flex-row gap-3 absolute top-0 animate-marquee2`}>
                {render}
            </div>
        </div>
    );
};

export function ArtifactItem({artifact, isOnRight = true}: { artifact: ArtifactModel, isOnRight: boolean }) {

    const firstSeparatorWidth = randomIntFromInterval(15, 70);
    const secondSeparatorWidth = 100 - firstSeparatorWidth;

    return (
        <>
            {isOnRight ? ArtifactItemOnRight({artifact}) : ArtifactItemOnLeft({artifact})}
            <div className={`w-full flex flex-row gap-6 pb-5 px-5`}>
                <div style={{
                    width: `${firstSeparatorWidth}%`,
                }} className={`h-[0.6rem] bg-[#A198EE] rounded-full`}></div>
                <div style={{
                    width: `${secondSeparatorWidth}%`,
                }} className={`h-[0.6rem] bg-[#22246A] rounded-full`}></div>
            </div>
        </>
    );
}

function ArtifactItemOnRight({artifact}: { artifact: ArtifactModel }) {
    return (
        <div className={`flex flex-col md:flex-row w-full max:h-[1100px] md:max-h-[708px] overflow-hidden justify-end`}>

            <div className={`flex-col flex justify-start items-start w-full md:w-7/12 pt-10`}>
                <Link href={`/artifact-detail/${artifact.slug}#readme`} scroll={false}>
                    <div
                        className={`w-full md-w-11/12 flex flex-col justify-center items-center`}>
                        <div className={`w-9/12 md:w-9/12 hover:scale-[1.03] ease-in-out duration-300 cursor-pointer`}>
                            <div
                                style={{backgroundImage: `url(${artifact.imageUrl})`}}
                                className={`flex justify-center w-full md:w-full rounded-3xl justify-self-center aspect-video bg-no-repeat bg-cover`}>
                            </div>
                            <div
                                className={`relative -top-20 flex flex-col w-full md:w-full text-[#F9F4F1] bg-gradient-to-t from-[#0A0A0A] via-[${artifact.primaryThemeColor}] rounded-b-2xl p-9 pt-20`}>
                                <h1 className={`text-[#F9F4F1] text-3xl ${rowdiesBold.className}`}>
                                    {artifact.name}
                                    <XSThreeDots
                                        containerClassName={`relative bottom-2 md:bottom-1 right-2 md:right-1 z-10 w-[1rem] md:w-[1.1rem]`}
                                    />
                                </h1>
                                <p className={`${ubuntu.className} pt-2`}>
                                    {artifact.summaryText}
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            {/* diamond (rotated div) */}
            <div className={`flex flex-row items-center w-full md:w-5/12 max-h-[580px] justify-center pt-5 md:pt-60`}>
                <div className={`relative w-fit self-center justify-self-center`}>
                    <div
                        className={`absolute flex flex-col justify-between top-0 w-[400px] h-[400px] shrink-0 grow-0 rotate-45 overflow-hidden rounded-2xl bg-primaryDawn z-10`}>
                        <div>
                            <SkillBadgeRow technologies={artifact.technologies[0].list}
                                           shouldMarquee={artifact.technologies[0].shouldMarquee}/>
                            <SkillBadgeRow technologies={artifact.technologies[1].list}
                                           shouldMarquee={artifact.technologies[1].shouldMarquee}/>
                        </div>

                        <div className={`relative`}>
                            <div className={`flex flex-col gap-3 whitespace-nowrap`}>
                                {AestheticRender()}
                                {AestheticRender()}
                                {AestheticRender()}
                                {AestheticRender()}
                            </div>
                        </div>

                        <div className={`flex gap-10 justify-center pb-10`}>
                            <Link href={artifact.githubUrl ?? ""} >
                                <ArtifactActionButton size={'medium'}
                                                      className={`after:content-githubIcon relative z-10 button-view-on-github`}>View
                                    on GitHub</ArtifactActionButton>
                            </Link>
                            <Link href={artifact.demoUrl ?? ""}>
                                <ArtifactActionButton size={'medium'}
                                                      className={`after:content-['🚀'] relative z-10 button-view-demo`}>View
                                    Demo</ArtifactActionButton>
                            </Link>
                        </div>
                    </div>
                    <div
                        className={`relative top-[75px] right-6 bg-opacity-70 w-[350px] h-[350px] shrink-0 grow-0 rotate-45 rounded-2xl bg-primaryDawn`}>
                    </div>
                    <div style={{
                        top: '-200px',
                    }}
                         className={`relative right-8 bg-opacity-50 w-[300px] h-[300px] shrink-0 grow-0 rotate-45 rounded-2xl bg-primaryDawn`}>
                    </div>
                </div>
            </div>
        </div>
    );
}


function ArtifactItemOnLeft({artifact}: { artifact: ArtifactModel }) {
    return (
        <div
            className={`flex flex-col-reverse md:flex-row w-full max:h-[1100px] md:max-h-[708px] overflow-hidden justify-end`}>

            {/* diamond (rotated div) */}
            <div className={`flex flex-row items-center w-full md:w-5/12 max-h-[580px] justify-center pt-5 md:pt-60`}>
                <div className={`relative w-fit self-center justify-self-center`}>
                    <div
                        className={`absolute flex flex-col justify-between top-0 w-[400px] h-[400px] shrink-0 grow-0 -rotate-[35deg] overflow-hidden rounded-2xl bg-primaryDawn z-10`}>
                        <div>
                            <SkillBadgeRow technologies={artifact.technologies[0].list}
                                           shouldMarquee={artifact.technologies[0].shouldMarquee}/>
                            <SkillBadgeRow technologies={artifact.technologies[1].list}
                                           shouldMarquee={artifact.technologies[1].shouldMarquee}/>
                        </div>

                        <div className={`relative`}>
                            <div className={`flex flex-col gap-3 whitespace-nowrap`}>
                                {AestheticRender()}
                                {AestheticRender()}
                                {AestheticRender()}
                                {AestheticRender()}
                            </div>
                        </div>

                        <div className={`flex gap-10 justify-center pb-10`}>
                            <Link href={artifact.githubUrl ?? ""}>
                                <ArtifactActionButton size={'medium'}
                                                      className={`after:content-githubIcon relative z-10 button-view-on-github`}>View
                                    on GitHub</ArtifactActionButton>
                            </Link>
                            <Link href={artifact.demoUrl ?? ""}>
                                <ArtifactActionButton size={'medium'}
                                                      className={`after:content-['🚀'] relative z-10 button-view-demo`}>View
                                    Demo</ArtifactActionButton>
                            </Link>
                        </div>
                    </div>
                    <div
                        className={`relative top-[75px] right-6 bg-opacity-70 w-[350px] h-[350px] shrink-0 grow-0 rotate-45 rounded-2xl bg-primaryDawn`}>
                    </div>
                    <div style={{
                        top: '-200px',
                    }}
                         className={`relative right-8 bg-opacity-50 w-[300px] h-[300px] shrink-0 grow-0 rotate-45 rounded-2xl bg-primaryDawn`}>
                    </div>
                </div>
            </div>

            <div className={`flex-col flex justify-start items-start w-full md:w-7/12 pt-10 z-30`}>
                <Link href={`/artifact-detail/${artifact.slug}#readme`} scroll={false}>
                    <div
                        className={`w-full md-w-11/12 flex flex-col justify-center items-center`}>
                        <div className={`w-9/12 md:w-9/12 hover:scale-[1.03] ease-in-out duration-300 cursor-pointer`}>
                            <div
                                style={{backgroundImage: `url(${artifact.imageUrl})`}}
                                className={`flex justify-center w-full md:w-full rounded-3xl justify-self-center aspect-video bg-no-repeat bg-cover`}>
                            </div>
                            <div
                                className={`relative -top-20 flex flex-col w-full md:w-full text-[#F9F4F1] bg-gradient-to-t from-[#0A0A0A] via-[${artifact.primaryThemeColor}] rounded-b-2xl p-9 pt-20`}>
                                <h1 className={`text-[#F9F4F1] text-3xl ${rowdiesBold.className}`}>
                                    {artifact.name}
                                    <XSThreeDots
                                        containerClassName={`relative bottom-2 md:bottom-1 right-2 md:right-1 z-10 w-[1rem] md:w-[1.1rem]`}
                                    />
                                </h1>
                                <p className={`${ubuntu.className} pt-2`}>
                                    {artifact.summaryText}
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
