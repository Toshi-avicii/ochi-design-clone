import { AnimatePresence, motion } from "framer-motion"
import HoverButton from "./ui/HoverButton"
import AnimatedButton from "./ui/AnimatedButton";
import { useState } from "react"

function FeaturedPage() {
    const [isHovered, setIsHovered] = useState({
        fyde: false,
        vise: false,
        trawa: false,
        premium: false
    });

    return (
        <div className="lg:pt-20 pt-10 pb-10 bg-slate-50 rounded-tr-3xl rounded-tl-3xl">
            <div className="lg:px-10 px-4 py-10 border-b border-zinc-400">
                <h1 className="font-neueMontreal text-[8.5vw] lg:text-[4vw] text-zinc-800">Featured projects</h1>
            </div>
            {/* features row */}
            <div className="features-row flex items-center my-4 lg:px-10 px-4 gap-4 relative flex-wrap flex-col lg:flex-row">
                {/* individual feature */}
                <div className="relative flex flex-col gap-y-4 flex-1 justify-center items-start">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-zinc-900"></div>
                        <p className="uppercase font-neueMontreal text-zinc-700">fyde</p>
                    </div>
                    <div className="min-h-[40vw] rounded-xl bg-[#CECECF] group overflow-hidden hover:scale-[0.95] transition-all duration-700">
                        <img
                            onMouseEnter={() => setIsHovered((prev) => {
                                return {
                                    ...prev,
                                    fyde: true
                                }
                            })}
                            onMouseLeave={() => setIsHovered((prev) => {
                                return {
                                    ...prev,
                                    fyde: false
                                }
                            })}
                            src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                            alt="fyde"
                            className="min-h-[40vw] rounded-xl cursor-pointer group-hover:scale-[1.1] transition-all duration-700"
                        />
                    </div>
                    <div className="btn-box flex gap-3 items-center justify-start my-2 flex-wrap">
                        <HoverButton text="audit" variant="light" />
                        <HoverButton text="copyrighting" variant="light" />
                        <HoverButton text="sales deck" variant="light" />
                        <HoverButton text="slides design" variant="light" />
                    </div>

                    {/* mobile hovered headings */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1 lg:hidden overflow-hidden">
                        <AnimatePresence>
                        {isHovered.fyde && ['f', 'y', 'd', 'e'].map((char, index) => {
                            return (
                                <motion.h1
                                    initial={{ y: '-100%' }}
                                    animate={isHovered.fyde && { y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1
                                    }}
                                    exit={{
                                        y: '-100%'
                                    }}
                                    key={index}
                                    className="text-[#cdea68] font-bold text-[30vw] lg:text-[12vw] uppercase font-founderGrotesk"
                                >
                                    {char}
                                </motion.h1>
                            )
                        })
                        }
                        </AnimatePresence>
                    </div>
                </div>
                {/* individual feature */}
                <div className="relative flex flex-col gap-y-4 flex-1 justify-center items-start">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-zinc-900"></div>
                        <p className="uppercase font-neueMontreal text-zinc-700">vise</p>
                    </div>
                    <div
                        className="min-h-[40vw] rounded-xl group overflow-hidden hover:scale-[0.95] transition-all duration-700"
                    >
                        <img
                            onMouseEnter={() => setIsHovered((prev) => {
                                return {
                                    ...prev,
                                    vise: true
                                }
                            })}
                            onMouseLeave={() => setIsHovered((prev) => {
                                return {
                                    ...prev,
                                    vise: false
                                }
                            })}
                            src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                            alt="vise"
                            className="min-h-[40vw] rounded-xl cursor-pointer group-hover:scale-[1.1] transition-all duration-700"
                        />
                    </div>
                    <div className="btn-box flex gap-3 items-center justify-start my-2 flex-wrap">
                        <HoverButton text="agency" variant="light" />
                        <HoverButton text="company presentation" variant="light" />
                    </div>
                    {/* mobile hovered headings */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1 lg:hidden overflow-hidden">
                        <AnimatePresence>
                        {isHovered.vise && ['v', 'i', 's', 'e'].map((char, index) => {
                            return (
                                <motion.h1
                                    initial={{ y: '-100%' }}
                                    animate={isHovered.vise && { y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1
                                    }}
                                    exit={{
                                        y: '-100%'
                                    }}
                                    key={index}
                                    className="text-[#cdea68] font-bold text-[30vw] lg:text-[12vw] uppercase font-founderGrotesk"
                                >
                                    {char}
                                </motion.h1>
                            )
                        })
                        }
                        </AnimatePresence>
                    </div>
                </div>
                {/* hovered headings - desktop */}
                <div
                    className="hidden lg:flex lg:gap-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
                >

                    {isHovered.fyde && ['f', 'y', 'd', 'e'].map((char, index) => {
                        return (
                            <motion.h1
                                initial={{ y: '-100%' }}
                                animate={isHovered.fyde && { y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1
                                }}
                                key={index}
                                className="text-[#cdea68] font-bold text-[30vw] lg:text-[12vw] uppercase font-founderGrotesk"
                            >
                                {char}
                            </motion.h1>
                        )
                    })
                    }
                    {isHovered.vise && ['v', 'i', 's', 'e'].map((char, index) => {
                        return (
                            <motion.h1
                                initial={{ y: '-100%' }}
                                animate={isHovered.vise && { y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1
                                }}
                                key={index}
                                className="text-[#cdea68] font-bold text-[12vw] uppercase font-founderGrotesk"
                            >
                                {char}
                            </motion.h1>
                        )
                    })
                    }
                </div>

            </div>

            {/* features row */}
            <div className="features-row flex items-center my-4 lg:px-10 px-4 gap-4 relative flex-wrap mt-8 flex-col lg:flex-row">
                {/* individual feature */}
                <div className="relative flex flex-col gap-y-4 flex-1 justify-center items-start">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-zinc-900"></div>
                        <p className="uppercase font-neueMontreal text-zinc-700">trawa</p>
                    </div>
                    <div className="min-h-[40vw] rounded-xl bg-[#CECECF] group overflow-hidden cursor-pointer hover:scale-[0.95] transition-all duration-700">
                        <img
                            onMouseEnter={() => setIsHovered((prev) => {
                                return {
                                    ...prev,
                                    trawa: true
                                }
                            })}
                            onMouseLeave={() => setIsHovered((prev) => {
                                return {
                                    ...prev,
                                    trawa: false
                                }
                            })}
                            src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                            alt="trawa"
                            className="min-h-[40vw] rounded-xl cursor-pointer group-hover:scale-[1.1] transition-all duration-700"
                        />
                    </div>
                    <div className="btn-box flex gap-3 items-center justify-start my-2 flex-wrap">
                        <HoverButton text="brand identity" variant="light" />
                        <HoverButton text="design research" variant="light" />
                        <HoverButton text="investor deck" variant="light" />
                    </div>

                    {/* mobile hovered headings */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1 lg:hidden overflow-hidden">
                        <AnimatePresence>
                        {isHovered.trawa && ['t', 'r', 'a', 'w', 'a'].map((char, index) => {
                            return (
                                <motion.h1
                                    initial={{ y: '-100%' }}
                                    animate={isHovered.trawa && { y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1
                                    }}
                                    exit={{
                                        y: '-100%'
                                    }}
                                    key={index}
                                    className="text-[#cdea68] font-bold text-[30vw] lg:text-[12vw] uppercase font-founderGrotesk"
                                >
                                    {char}
                                </motion.h1>
                            )
                        })
                        }
                        </AnimatePresence>
                    </div>
                </div>
                {/* individual feature */}
                <div className="relative flex flex-col gap-y-4 flex-1 justify-center items-start">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-zinc-900"></div>
                        <p className="uppercase font-neueMontreal text-zinc-700">premium blend</p>
                    </div>
                    <div
                        className="min-h-[40vw] rounded-xl group overflow-hidden cursor-pointer hover:scale-[0.95] transition-all duration-700"
                    >
                        <img
                            onMouseEnter={() => setIsHovered((prev) => {
                                return {
                                    ...prev,
                                    premium: true
                                }
                            })}
                            onMouseLeave={() => setIsHovered((prev) => {
                                return {
                                    ...prev,
                                    premium: false
                                }
                            })}
                            src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                            alt="premium blend"
                            className="min-h-[40vw] rounded-xl cursor-pointer group-hover:scale-[1.1] transition-all duration-700"
                        />
                    </div>
                    <div className="btn-box flex gap-3 items-center justify-start my-2 flex-wrap">
                        <HoverButton text="branded template" variant="light" />
                    </div>

                     {/* mobile hovered headings */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1 lg:hidden overflow-hidden">
                        <AnimatePresence>
                        {isHovered.premium && 
                            ['p', 'r', 'e','m', 'i', 'u', 'm', 'b', 'l', 'e', 'n', 'd'].map((char, index) => {
                            return (
                                <motion.h1
                                    initial={{ y: '-100%' }}
                                    animate={isHovered.premium && { y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1
                                    }}
                                    exit={{
                                        y: '-100%'
                                    }}
                                    key={index}
                                    className="text-[#cdea68] font-bold text-[20vw] lg:text-[12vw] uppercase font-founderGrotesk"
                                >
                                    {char}
                                </motion.h1>
                            )
                        })
                        }
                        </AnimatePresence>
                    </div>
                </div>
                {/* hovered headings */}
                <div
                    className="hidden lg:flex gap-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
                >

                    {isHovered.trawa && ['t', 'r', 'a', 'w', 'a'].map((char, index) => {
                        return (
                            <motion.h1
                                initial={{ y: '-100%' }}
                                animate={isHovered.trawa && { y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1
                                }}
                                key={index}
                                className="text-[#cdea68] font-bold text-[12vw] uppercase font-founderGrotesk"
                            >
                                {char}
                            </motion.h1>
                        )
                    })
                    }
                    {isHovered.premium &&
                        ['p', 'r', 'e', 'm', 'i', 'u', 'm', ' ', 'b', 'l', 'e', 'n', 'd']
                            .map((char, index) => {
                                return (
                                    <motion.h1
                                        initial={{ y: '-100%' }}
                                        animate={isHovered.premium && { y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.05
                                        }}
                                        key={index}
                                        className="text-[#cdea68] font-bold text-[12vw] uppercase font-founderGrotesk"
                                    >
                                        {char}
                                    </motion.h1>
                                )
                            })
                    }
                </div>
            </div>

            <div className="view-all my-[8vw] flex justify-center items-center">
                <AnimatedButton text="view all case studies" variant="dark" />
            </div>
        </div>
    )
}

export default FeaturedPage
