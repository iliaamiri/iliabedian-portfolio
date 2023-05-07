import Image from 'next/image';
import {StyledHeader} from "@/components/StyledHeader";
import MDXContent from '@/app/about/content.mdx';
import {MarkdownContainer} from "@/components/Markdown/MarkdownContainer";

export default function About() {
    return (
        <>
            <div className={`-mt-20 md:-mt-40 lg:-mt-52 flex flex-col w-full items-center`}>
                <Image src={'/assets/hero-cover.png'} alt={'blog cover'} width={9999} height={800}
                       className={`w-full h-auto -z-10 scale-150 -translate-x-20 md:translate-x-0  md:scale-100`}
                       quality={100}/>
            </div>
            <div className={'static -mt-12 md:mt-24 lg:mt-0 md:relative md:-top-80 flex justify-center'}>
                <Image src={'/assets/about-me-headshot.jpg'} alt={'a picture of me with a mustache. neutral face'} width={300} height={300}
                       className={`rounded-full static left-0 md:absolute md:left-[10vw] lg:left-[20vw] xl:left-[30vw]`}
                       quality={100}/>
            </div>
            <div className={'z-10'}>
                <StyledHeader>About Me</StyledHeader>
                <MarkdownContainer>
                    <MDXContent/>
                </MarkdownContainer>
            </div>
        </>
    );
}
