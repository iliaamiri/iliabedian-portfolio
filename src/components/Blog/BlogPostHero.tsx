import {ThreeDots} from "@/components/ThreeDots";
import Link from "next/link";
import Image from "next/image";
import Icon_Twitter from "../../../public/assets/icons/share/twitter.svg";
import Icon_Linkedin from "../../../public/assets/icons/share/linkedin.svg";
import Icon_CopyLink from "../../../public/assets/icons/share/web-link.svg";
import {Roboto, Rowdies, Ubuntu} from "next/font/google";
import {useEffect, useState} from "react";
import {BlogModel} from "@/lib/models";

const rowdies = Rowdies({subsets: ['latin'], weight: '300'})
const ubuntu = Ubuntu({subsets: ['latin'], weight: '500'})
const roboto = Roboto({subsets: ['latin'], weight: '400'})

export function BlogPostHero({coverImage, blog, ...otherProps}: {
    children?: any;
    id?: string;
    coverImage?: any;
    blog: BlogModel;
}) {
    const [currentUrl, setCurrentUrl] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentUrl(window.location.href);
        }
    }, []);

    return (
        <div className={`-mt-20 md:-mt-40 flex flex-col w-full items-center`}>
            <div
                style={{backgroundImage: `url(${coverImage})`}}
                className={`w-full h-[30vw] md:h-[45vw] lg:h-[35vw] xl:h-[27vw] bg-bottom bg-cover`}>
                {/*<Image src={coverImage} alt={'blog cover'} width={9999999} height={100} className={`w-full h-[50vw] md:h-auto`} quality={100}/>*/}
            </div>
            <div className={`-mt-5 md:-mt-20 w-11/12 md:w-9/12`}>
                <h1 className={`${rowdies.className} bg-backgroundDawn px-3 md:px-10 pt-5 md:pt-10 rounded-t-2xl text-4xl md:text-5xl lg:text-[5.252rem]`} {...otherProps} />
                <ThreeDots containerClassName={`relative bottom-3 md:bottom-5 right-5 md:right-7 z-10`}/>
                <div className={'flex flex-row w-full justify-end mb-5 gap-5'}>
                    <div className={`flex flex-row justify-between items-center gap-3`}>
                        <span className={`${roboto.className}`}>
                                {blog.timeToRead} min read
                            </span>
                        <span>|</span>
                        <p className={`${ubuntu.className}`}>
                            {blog.publishedAt.toLocaleDateString(undefined, {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </p>
                    </div>
                    <div className={`flex justify-end items-center gap-4 pr-10`}>
                        <Link target={"_blank"} className={`hover:opacity-50 mr-2`}
                              href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${blog.title}`}>
                            <Image src={Icon_Twitter} alt={'Share on Twitter'} width={40} height={40}
                                   className={`cursor-pointer`}/>
                        </Link>
                        <Link target={"_blank"} className={`hover:opacity-50`}
                              href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${blog.title}`}>
                            <Image src={Icon_Linkedin} alt={'Share on LinkedIn'} width={30} height={30}
                                   className={`cursor-pointer`}/>
                        </Link>
                        <button className={`hover:opacity-50`}
                                onClick={() => navigator.clipboard.writeText(currentUrl || "")}>
                            <Image src={Icon_CopyLink} alt={'Copy link'} width={45} height={45}
                                   className={`cursor-pointer`}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
