'use client';
import {useEffect, useState} from "react";

export function useResponsiveImage(calculateTheSize: (windowWidth: number) => { w: number, h: number }) {
    const [size, setSize] = useState(
        global.window !== undefined ? calculateTheSize(window.innerWidth) : { h: 300, w: 300 });

    useEffect(() => {
        const resizeHandler = (e: UIEvent) => {
            const newWindow = e.target as Window;
            if (!newWindow) return;

            setSize(calculateTheSize(newWindow.innerWidth));
        };

        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);

    return size;
}
