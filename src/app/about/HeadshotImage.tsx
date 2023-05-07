'use client';
import Image from "next/image";
import {useEffect, useState} from "react";
import ImageSrc from './about-me-headshot.jpg';

const getNewSize = (width: number) => {
    if (width > 765) {
        return { h: 300, w: 300 };
    } else {
        return { h: 150, w: 150 };
    }
};

export function HeadshotImage() {
    const [imageSize, setImageSize] = useState<{ h: number, w: number }>(
        global.window !== undefined ? getNewSize(window.innerWidth) : { h: 300, w: 300 });

    useEffect(() => {
        const resizeHandler = (e: UIEvent) => {
            const newWindow = e.target as Window;
            if (!newWindow) return;

            setImageSize(getNewSize(newWindow.innerWidth));
        };

        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);

    return (
        <Image src={ImageSrc} alt={'a picture of me with a mustache. neutral face'} width={imageSize.w} height={imageSize.h}
               className={`rounded-full static left-0 md:absolute md:left-[10vw] lg:left-[20vw] xl:left-[30vw]`}
               quality={100} placeholder="blur" />
    );
}
