import { useEffect, useLayoutEffect, useState } from "react"
import Eyes from "./ui/Eyes";
import useCursor from "../hooks/useCursor";

function EyesPage() {
    const [showVideo, setShowVideo] = useState(false);
    const { rotate, x, y } = useCursor()

    const videoHandler =(e) => {
        const video = document.getElementById('section-video');
        setShowVideo(true);
        if(showVideo) {
            video.play();
        }

        video.addEventListener('ended', (e) => {
            setShowVideo(false);
        })
    }

    return (
        <div className="w-full h-[300px] lg:h-screen overflow-hidden relative cursor-pointer" onClick={videoHandler}>
            <div 
                data-scroll
                data-scroll-container
                data-scroll-speed="-0.7"
                className="relative w-full h-[300px] lg:h-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] bg-cover bg-center"
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-10">
                    <Eyes cursorX={x} cursorY={y} rotate={rotate} text="play" />
                    <Eyes cursorX={x} cursorY={y} rotate={rotate} text="play" />
                </div>
            </div>
            <div 
                style={{
                    zIndex: showVideo ? 100 : 0,
                    opacity: showVideo ? 1 : 0
                }}
                className="absolute top-0 left-0 w-full h-[300px] lg:h-full -z-[2] opacity-0 transition-all duration-500">
                <video 
                    src="https://ochi.design/wp-content/uploads/2022/05/Main-HQ-1.mp4"
                    muted
                    autoPlay
                    id="section-video"
                    className="h-[300px] lg:h-auto"
                ></video>
            </div>
        </div>
    )
}

export default EyesPage
