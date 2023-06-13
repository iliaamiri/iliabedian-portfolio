import {randomIntFromInterval} from "@/lib/utils";

const speedToAnimation = {
    slow: ['animate-marqueeSlow', 'animate-marquee2Slow'],
    fast: ['animate-marquee', 'animate-marquee2'],
}

export const AestheticRender = (seed: number = 10, speed: 'slow' | 'fast' = 'fast') => {
    const render = [];
    for (let i = 0; i < seed; i++) {
        const rand = randomIntFromInterval(2, 4);

        render.push(
            <div
                key={i}
                style={{
                    backgroundColor: `${i % rand == 0 ? '#5441FF' : (i % (rand + 1) ? '#3C9069' : '#5441FF')}`,
                    width: `${randomIntFromInterval(30, 150)}px`,
                }}
                className={`w-fit h-[0.6rem] shrink-0 rounded-full`}></div>
        );
    }

    return (
        <div className={`relative`}>
            <div className={`flex flex-row gap-3 ${speedToAnimation[speed][0]}`}>
                {render}
            </div>
            <div className={`flex flex-row gap-3 absolute top-0 ${speedToAnimation[speed][1]}`}>
                {render}
            </div>
        </div>
    );
};
