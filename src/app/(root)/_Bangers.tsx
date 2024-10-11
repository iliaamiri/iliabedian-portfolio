export function Bangers() {
  return (
    <div
      key={'banger'}
      id='bangers'
      className={`mb-32 flex w-full flex-col items-center justify-center`}
    >
      <div className={`mt-10 w-11/12 px-4 md:w-3/4 lg:w-1/2`}>
        <iframe
          style={{
            borderRadius: '12px',
          }}
          src='https://open.spotify.com/embed/playlist/0gxi5avqGS91xaR6tyAnb9?utm_source=generator&theme=0'
          width='100%'
          height='500'
          frameBorder='0'
          allowFullScreen={true}
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          loading='lazy'
        ></iframe>
      </div>
    </div>
  );
}
