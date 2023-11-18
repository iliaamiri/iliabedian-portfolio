export function Bangers() {
    return (
        <div id='bangers' className={`flex flex-col justify-center items-center w-full mb-32`}>
            <div className={`px-4 w-11/12 md:w-3/4 lg:w-1/2 mt-10`}>
                <iframe style={{
                    borderRadius: '12px'
                }} src="https://open.spotify.com/embed/playlist/6p5DhO7awb6KowxH8x8RbM?utm_source=generator&theme=0"
                        width="100%" height="500" frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"></iframe>
            </div>
        </div>
    )
}
