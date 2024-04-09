import { motion } from "framer-motion"

function Marquee() {
  return (
    <div 
        data-scroll
        data-scroll-section
        data-scroll-speed="0.1"
        className="overflow-hidden w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl text-white font-founderGrotesk"
    >
        <div className="moving border-t-2 border-b-2 border-zinc-200 overflow-hidden flex whitespace-nowrap items-center px-10">
            <motion.h1 
                className="text-[30vw] leading-none pt-10 lg:pt-20 -mb-18 uppercase font-extrabold pr-10"
                initial={{ x: 0 }}
                animate={{ x: '-100%' }}
                transition={{ ease: 'linear', repeat: Infinity, duration: 12 }}
            >We are Ochi
            </motion.h1>
            <motion.h1 
                className="text-[30vw] leading-none pt-10 lg:pt-20 -mb-18 uppercase font-extrabold pr-10"
                initial={{ x: 0 }}
                animate={{ x: '-100%' }}
                transition={{ ease: 'linear', repeat: Infinity, duration: 12 }}
            >We are Ochi
            </motion.h1>

            <motion.h1 
                className="text-[30vw] leading-none pt-10 lg:pt-20 :-mb-18 uppercase font-extrabold pr-10"
                initial={{ x: 0 }}
                animate={{ x: '-100%' }}
                transition={{ ease: 'linear', repeat: Infinity, duration: 12 }}
            >We are Ochi
            </motion.h1>
        </div>
    </div>
  )
}

export default Marquee
