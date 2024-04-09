import { IoMdArrowUp } from "react-icons/io";
import { motion } from 'framer-motion'

function LandingPage() {
    const headingText = ["we create", 'eye opening', 'presentations'];
    const para = ['For public and private companies', 'From the first pitch to IPO'];
    
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-1" className="min-h-screen w-full pt-1">
            <div className="lg:mt-32 lg:px-10 mt-24 flex flex-col">
                <div
                    style={{
                        minHeight: 'calc(100vh - 6rem - 40vh)'
                    }} 
                    className="flex-[2] px-4"
                    >
                    {
                        headingText.map((text, index) => {
                            return (
                                <div className="masker" key={index}>
                                    <div className="w-full flex items-end overflow-hidden">
                                        {
                                            index === 1 && 
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                animate={{ width: '9vw' }}
                                                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.8 }}
                                                className="hidden lg:block mr-[1vw] w-[9vw] relative rounded-sm -top-[1.5vw] h-[6vw] bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] bg-cover bg-center">
                                            </motion.div>
                                        }

                                        {
                                            index === 1 && 
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                animate={{ width: '70px' }}
                                                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.8 }}
                                                className="block lg:hidden mr-[4vw] w-[70px] relative rounded-lg -top-[5vw] h-[15vw] bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] bg-cover bg-center">
                                            </motion.div>
                                        }
                                        <h1
                                            className="sm:pt-[2vw] pt-[2vw] -mb-[1vw] sm:-mb-[1vw] font-founderGrotesk sm:leading-[7.5vw] leading-[20vw] text-zinc-800 uppercase text-[20vw] sm:text-[9vw] font-bold"
                                        >
                                            {text}
                                        </h1>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <div 
                style={{
                    minHeight: 'calc(100vh - 6rem - 55vh)'
                }} 
                className="px-4 lg:px-10 py-5 border-t-[1px] border-zinc-700 mt-6 lg:mt-0 flex justify-between items-start lg:items-center flex-col lg:flex-row"
            >
                {
                    para.map((item, index) => {
                        return (
                            <p
                                className="font-light font-neueMontreal leading-none tracking-tight text-lg"
                                key={index}
                            >{item}
                            </p>
                        )
                    })
                }

                <div className="start flex justify-between items-center gap-2">
                    <div className="px-5 py-2 border uppercase text-sm font-light font-neueMontreal border-zinc-700 rounded-full cursor-pointer">Start the project</div>
                    <div className="w-10 h-10 rounded-full border border-zinc-700 flex justify-center items-center cursor-pointer">
                        <IoMdArrowUp className="text-2xl rotate-45" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
