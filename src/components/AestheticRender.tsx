import {randomIntFromInterval} from "@/lib/utils";

export const AestheticRender = () => {
    const render = [];
    for (let i = 0; i < 10; i++) {
        render.push(
            <div
                style={{
                    backgroundColor: `#${i % 2 == 0 ? 'A198EE' : '22246A'}`,
                    width: `${randomIntFromInterval(30, 150)}px`,
                }}
                className={`w-fit h-[0.6rem] shrink-0 rounded-full`}></div>
        );
    }

    return (
        <div className={`relative`}>
            <div className={`flex flex-row gap-3 animate-marquee`}>
                {render}
            </div>
            <div className={`flex flex-row gap-3 absolute top-0 animate-marquee2`}>
                {render}
            </div>
        </div>
    );
};
