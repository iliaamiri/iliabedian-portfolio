interface Props {
  containerClassName?: string;
  dtoColor?: string;
  onClick?: () => void;
}
export function ThreeDots({ containerClassName = '' }: Props) {
  let s =
    'w-4 h-4 md:w-6 md:h-6 bg-primaryDawn rounded shrink-0 grow-0 rotate-45';
  return (
    <div
      className={`${containerClassName} flex w-[2.3rem] flex-col md:w-[3.575rem]`}
    >
      <div className={`flex gap-[0.4rem] md:gap-[0.6rem]`}>
        <span className={`${s}`}></span>
        <span className={`${s}`}></span>
      </div>
      <div className={`relative top-[-0.1rem] flex justify-center`}>
        <span className={`${s}`}></span>
      </div>
    </div>
  );
}

export function ThreeDotsBurgerMenu({
  containerClassName = '',
  onClick,
}: Props) {
  let s =
    'w-4 h-4 md:w-6 md:h-6 bg-primaryDawn rounded shrink-0 grow-0 rotate-45';
  return (
    <div
      onClick={() => (onClick !== undefined ? onClick() : '')}
      className={`${containerClassName} flex w-[2.3rem] flex-col md:w-[3.575rem]`}
    >
      <div className={`flex gap-[0.4rem] md:gap-[0.6rem]`}>
        <span className={`${s}`}></span>
        <span className={`${s}`}></span>
      </div>
      <div className={`relative top-[-0.1rem] flex justify-center`}>
        <span className={`${s}`}></span>
      </div>
    </div>
  );
}

export function XSThreeDots({
  containerClassName = '',
  dtoColor = 'bg-[white]',
}: Props) {
  let s = 'w-2 h-2 md:w-2 md:h-2 rounded shrink-0 grow-0 rotate-45 ' + dtoColor;
  return (
    <div
      className={`${containerClassName} flex w-[1rem] flex-col md:w-[1.1rem]`}
    >
      <div className={`flex gap-[0.001rem] md:gap-[0.06rem]`}>
        <span className={`${s}`}></span>
        <span className={`${s}`}></span>
      </div>
      <div className={`relative top-[-0.1rem] flex justify-center`}>
        <span className={`${s}`}></span>
      </div>
    </div>
  );
}
