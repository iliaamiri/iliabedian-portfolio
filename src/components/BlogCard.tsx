import {BlogModel} from "@/lib/models";
import {Roboto, Rowdies, Ubuntu} from "next/font/google";
import Link from "next/link";
import { XSThreeDots } from "./ThreeDots";
import Image from "next/image";

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '500' })
const rowdiesBold = Rowdies({ subsets: ['latin'], weight: '300' })
const roboto = Roboto({ subsets: ['latin'], weight: '400' })

interface Props {
    blog: BlogModel;
}

export function BlogCard({ blog }: Props) {
    return (
        <Link href={`/blog/${blog.slug}`} scroll={false} className={`[&:only-child]:col-start-2 flex md:w-10/12`} >
            <div className={`flex flex-col items-stretch w-full justify-center hover:scale-[1.03] ease-in-out duration-300 cursor-pointer shadow-2xl rounded-b-2xl`}>
                <div
                    style={{ backgroundImage: `url(${blog.coverImage})` }}
                    className={`fadedImage ${blog.shadow} flex justify-center rounded-t-3xl justify-self-center aspect-video bg-no-repeat bg-cover`}>
                    {/*<Image src={blog.coverImage} alt={blog.title} width={9999999} height={9999999} className={`w-full h-full rounded-3xl`} quality={100}/>*/}
                </div>
                <div
                    className={`relative flex-1 flex flex-col text-[#F9F4F1] bg-gradient-to-t ${blog.backgroundColors} rounded-b-2xl`}>
                    <div className={`p-9 flex flex-col justify-between h-full rounded-b-2xl`}>
                        <h1 className={`text-[#F9F4F1] text-2xl ${rowdiesBold.className}`}>
                            {blog.title}
                            <XSThreeDots
                                containerClassName={`relative bottom-2 md:bottom-1 right-2 md:right-1 z-10 w-[1rem] md:w-[1.1rem]`}
                            />
                        </h1>
                        <div className={`pt-2 flex flex-row justify-between items-center`}>
                            <p className={`${ubuntu.className}`}>
                                {blog.publishedAt.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                            <span className={`${roboto.className}`}>
                                {blog.timeToRead} min read
                            </span>
                        </div>
                    </div>
                    <div className={` relative bottom-0 rounded-b-xl bg-[url('/assets/lines.svg')] bg-left-bottom h-14`}>
                    </div>
                </div>
            </div>
        </Link>
    );
}
