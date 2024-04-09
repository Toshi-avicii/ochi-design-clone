import useCursor from "../hooks/useCursor"
import Eyes from "./ui/Eyes"
import AnimatedButton from '../components/ui/AnimatedButton'

function ProjectPage() {
    const { rotate, x, y } = useCursor();
    return (
        <div
            data-scroll
            data-scroll-speed="-0.1" 
            className="py-[5vw] min-h-[100vh] relative w-full flex justify-center flex-col items-center bg-[#CDEA68]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-10 z-10">
                <Eyes cursorX={x} cursorY={y} rotate={rotate} />
                <Eyes cursorX={x} cursorY={y} rotate={rotate} />
            </div>
            <div className="p-4">
                <h1 className="font-founderGrotesk text-zinc-900 text-center lg:-mb-10 font-bold text-[20vw] lg:text-[16vw] uppercase leading-none">Ready</h1>
                <h1 className="font-founderGrotesk text-zinc-900 text-center lg:-mb-10 font-bold text-[20vw] lg:text-[16vw] uppercase leading-none">To start</h1>
                <h1 className="font-founderGrotesk text-zinc-900 text-center lg:-mb-10 font-bold text-[20vw] lg:text-[16vw] uppercase leading-none">the project</h1>
            </div>
            <div className="btns flex gap-2 my-4 justify-center items-center flex-col py-10">
                <AnimatedButton text="start the project" variant="dark" />
                <p className="font-neueMontreal text-center uppercase">Or</p>
                <AnimatedButton text="hello@ochi.design" variant="light" />
            </div>
        </div>
    )
}

export default ProjectPage
