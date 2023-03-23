interface Props {
    containerClassName?: string;
}
export function ThreeDots({containerClassName = ""}: Props) {
    let s = 'w-4 h-4 md:w-6 md:h-6 bg-primaryDawn rounded shrink-0 grow-0 rotate-45';
    return (
        <div className={`${containerClassName} flex flex-col w-[2.3rem] md:w-[3.575rem]`}>
            <div className={`flex gap-[0.4rem] md:gap-[0.6rem]`}>
                <span className={`${s}`}></span>
                <span className={`${s}`}></span>
            </div>
            <div className={`flex justify-center relative top-[-0.1rem]`}>
                <span className={`${s}`}></span>
            </div>
        </div>
    );
}

export function ThreeDotsBurgerMenu({containerClassName = ""}: Props) {
    let s = 'w-4 h-4 md:w-6 md:h-6 bg-primaryDawn rounded shrink-0 grow-0 rotate-45';
    return (
        <div className={`${containerClassName} flex flex-col w-[2.3rem] md:w-[3.575rem]`}>
            <div className={`flex gap-[0.4rem] md:gap-[0.6rem]`}>
                <span className={`${s}`}></span>
                <span className={`${s}`}></span>
            </div>
            <div className={`flex justify-center relative top-[-0.1rem]`}>
                <span className={`${s}`}></span>
            </div>
        </div>
    );
}

export function XSThreeDots({containerClassName = ""}: Props) {
    let s = 'w-2 h-2 md:w-2 md:h-2 bg-[white] rounded shrink-0 grow-0 rotate-45';
    return (
        <div className={`${containerClassName} flex flex-col w-[1rem] md:w-[1.1rem]`}>
            <div className={`flex gap-[0.001rem] md:gap-[0.06rem]`}>
                <span className={`${s}`}></span>
                <span className={`${s}`}></span>
            </div>
            <div className={`flex justify-center relative top-[-0.1rem]`}>
                <span className={`${s}`}></span>
            </div>
        </div>
    );
}
