'use client';
import Image, {ImageProps} from "next/image";
import {useResponsiveImage} from "@/lib/hooks/useResponsiveImage";

const calculateTheSize = (windowWidth: number) => {
    if (windowWidth < 400) {
        return { w: 20, h: 20 };
    } else  {
        return { w: 30, h: 30 };
    }
}

export function ShareLinkImage({ ...imageProps }: ImageProps) {
    const size = useResponsiveImage(calculateTheSize);

    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image {...imageProps} width={size.w} height={size.h} />
    );
}
