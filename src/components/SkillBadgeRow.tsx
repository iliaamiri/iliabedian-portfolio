import {TechnologyModel} from "@/lib/models";
import {Ubuntu} from "next/font/google";

const ubuntu = Ubuntu({subsets: ['latin'], weight: '500'})

export function SkillBadgeRow({technologies, shouldMarquee}: { technologies: TechnologyModel[]; shouldMarquee?: boolean; }) {

    const RenderTechnologies = () => technologies.map((technology, index) => (
        <SkillBadge key={`skill${index}`} technology={technology} />
    ));

    return (
        <div className={`relative`}>
            <div
                style={{animationDirection: shouldMarquee ? 'alternate-reverse' : 'normal'}}
                className={`flex flex-row gap-2 mt-6 ${shouldMarquee ? 'animate-marquee' : ''}`}>
                {RenderTechnologies()}
            </div>

            {/*{shouldMarquee && (*/}
            {/*<div className={`flex flex-row gap-2 mt-6 absolute top-0 animate-marquee2 whitespace-nowrap`}>*/}
            {/*    {RenderTechnologies()}*/}
            {/*</div>)}*/}

        </div>
    );
}

export function SkillBadge({technology}: { technology: TechnologyModel}) {
    return (
        <div className={`inline-block border-[0.0002rem] bg-backgroundDawn w-fit rounded pt-1 cursor-default group hover:scale-[1.05] duration-300 ease-in-out`}>
            <span className={`px-5 ${ubuntu.className} whitespace-nowrap`}>{technology.skillName}</span>

            <div
                className={`bg-skillConfidenceDawn h-[0.3rem] w-[${technology.confidenceLevel}%] rounded mt-1 group-hover:bg-secondaryDawn ease-in-out duration-300`}></div>
        </div>
    );
}
