import {ArtifactModel} from "@/lib/models";
import Link from "next/link";
import {XSThreeDots} from "@/components/ThreeDots";
import {SkillBadgeRow} from "@/components/SkillBadgeRow";
import {AestheticRender} from "@/components/AestheticRender";
import {ArtifactActionButton} from "@/components/Buttons/ArtifactActionButton";
import {Rowdies, Ubuntu} from "next/font/google";

const ubuntu = Ubuntu({subsets: ['latin'], weight: '500'})
const rowdiesBold = Rowdies({subsets: ['latin'], weight: '700'})

export function ArtifactItemOnRight({artifact}: { artifact: ArtifactModel }) {
    return (
        <div className={`flex flex-col md:flex-row w-full justify-end`}>

            <div className={`flex-col flex justify-start items-start w-full md:w-7/12 pt-10`}>
                <div className={`w-full md-w-11/12 flex flex-col justify-center items-center`}>
                    <Link href={`/artifact-detail/${artifact.slug}#readme`}
                          className={`w-11/12 md:w-9/12 hover:scale-[1.03] ease-in-out duration-300 cursor-pointer`}>
                            <div
                                style={{backgroundImage: `url(/assets/mockups/${artifact.slug}.jpg)`}}
                                className={`flex justify-center w-full md:w-full rounded-3xl justify-self-center aspect-video bg-no-repeat bg-cover`}>
                            </div>
                            <div
                                className={`relative -top-20 flex flex-col w-full md:w-full text-black  rounded-b-2xl p-5 md:p-9 pt-20 md:pt-20`}>
                                <p className={`${ubuntu.className} pt-2`}>
                                    {artifact.summaryText}
                                </p>
                            </div>
                    </Link>
                </div>
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
                            <ArtifactActionButton size={'medium'}
                                                  className={`after:content-githubIcon relative z-10 button-view-on-github`}>
                                <Link href={artifact.githubUrl ?? ""} target={'_blank'}>
                                    View on GitHub
                                </Link>
                            </ArtifactActionButton>
                            <ArtifactActionButton size={'medium'}
                                                  className={`after:content-['🚀'] relative z-10 button-view-demo`}>
                                <Link href={artifact.demoUrl ?? ""} target={'_blank'}>
                                    View Demo
                                </Link>
                            </ArtifactActionButton>
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
