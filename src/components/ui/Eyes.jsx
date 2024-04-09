function Eyes({ cursorX, cursorY, rotate, text }) {

    return (
        <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex justify-center items-center">
            <div
                style={{
                    transform: `translate(${cursorX}px, ${cursorY}px)`
                }}
                className="w-[9vw] h-[9vw] rounded-full bg-zinc-800 flex justify-center items-center relative">
                {
                    text &&
                    <p className="uppercase font-neueMontreal text-lg text-white relative z-[3]">{text}</p>
                }
                {/* moving ball */}
                <div
                    style={{
                        transform: `translate(-50%, -50%) rotate(${rotate}deg)`
                    }}
                    className="line w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]">
                    <div className="ball w-4 h-4 rounded-full bg-zinc-100"></div>
                </div>
            </div>
        </div>
    )
}

export default Eyes
