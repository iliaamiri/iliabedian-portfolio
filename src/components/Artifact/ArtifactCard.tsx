import { ArtifactModel } from "@/lib/models";
import { Rowdies, Ubuntu } from "next/font/google";
import Link from "next/link";
import { XSThreeDots } from "../ThreeDots";

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '500' })
const rowdiesBold = Rowdies({ subsets: ['latin'], weight: '700' })

export function ArtifactCard({ artifact }: { artifact: ArtifactModel }) {
    return (
        <Link href={`/artifact-detail/${artifact.slug}#readme`} scroll={false} className={`flex md:w-10/12`} >
            <div className={`flex flex-col items-stretch h-full justify-center hover:scale-[1.03] ease-in-out duration-300 cursor-pointer grayscale hover:grayscale-0`}>
                <div
                    style={{ backgroundImage: `url(${artifact.imageUrl})` }}
                    className={`flex justify-center rounded-3xl justify-self-center aspect-video bg-no-repeat bg-cover`}>
                    {/*<Image src={artifact.imageUrl} alt={artifact.summaryText} width={9999999} height={9999999} className={`w-full h-full rounded-3xl`} quality={100} />*/}
                </div>
                <div
                    className={`relative flex-1 -top-20 flex flex-col text-[#F9F4F1] bg-gradient-to-t from-[#0A0A0A] via-[${artifact.primaryThemeColor}] rounded-b-2xl p-9 pt-20`}>
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
                <div className={`relative -top-24 rounded-b-xl bg-[url('/assets/lines.svg')] bg-left-bottom h-14`}>
                </div>
            </div>
        </Link>
    );
}