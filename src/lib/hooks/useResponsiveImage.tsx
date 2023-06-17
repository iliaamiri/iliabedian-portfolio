'use client';
import {useEffect, useState} from "react";

export function useResponsiveImage(calculateTheSize: (windowWidth: number) => { w: number, h: number }, defaultSize = { h: 30, w: 30 }) {
    const [size, setSize] = useState(
        global.window !== undefined ? calculateTheSize(window.innerWidth) : defaultSize);

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
