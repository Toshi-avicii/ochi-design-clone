import React, { useState } from 'react'
import AnimatedBorderedText from './ui/AnimatedBorderedText'
import AnimatedButton from './ui/AnimatedButton'

function AboutPage() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div 
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.35"
        className='bg-[#CDEA68] w-full rounded-3xl'
    >
        <div className='lg:px-10 px-4 lg:pt-20 pt-10 pb-10 flex flex-start items-center border-b-[1px] border-zinc-600'>
            <div className='font-neueMontreal text-[8.5vw] lg:text-[3.8vw] lg:w-[90%] text-zinc-800 leading-none'>
                <span>
                    Ochi is a strategic partner for fast-grow­ing tech businesses that need to 
                </span>
                <AnimatedBorderedText text="raise funds" display="inline" />,
                <AnimatedBorderedText text="sell products" display="inline" />, 
                <AnimatedBorderedText text="ex­plain com­plex ideas" display="inline" /> , and
                <AnimatedBorderedText text="hire great peo­ple" display="inline" />.
            </div>
        </div>

        <div className="flex lg:px-10 px-4 pt-4 pb-[10vw] justify-between items-start font-neueMontreal border-b-[1px] border-zinc-600 flex-col lg:flex-row">
            <div className="flex-[2] mb-6 lg:mb-0">
                <p className='text-zinc-700'>What you can expect:</p>
            </div>
            <div className="flex-1 space-y-8">
                <p className='leading-6 text-zinc-700 font-neueMontreal'>
                    We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
                </p>
                <p className="leading-6 font-neueMontreal text-zinc-700">
                    We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
                </p>
            </div>
            <div className="flex-1 flex justify-center items-center py-10">
                <div className="flex flex-col justify-center items-start">
                    <p>S:</p>
                    <AnimatedBorderedText text="Instagram" link={true} />
                    <AnimatedBorderedText text="Behance" link={true} />
                    <AnimatedBorderedText text="Facebook" link={true} />
                    <AnimatedBorderedText text="LinkedIn" link={true} />

                </div>
            </div>
        </div>
        <div className='flex lg:px-10 px-4 py-8 justify-between items-start flex-col lg:flex-row gap-y-8 lg:gap-y-0'>
            <div className='flex-1'>
                <h1 className='font-neueMontreal mb-4 text-[8.5vw] lg:text-[3.8vw] text-black leading-none'>Our approach: </h1>
                <AnimatedButton text="read more" variant="dark" hover={true} setHovered={setIsHovered} />
            </div>
            <div className={`flex-1 flex justify-center items-center overflow-hidden transition-all duration-500 rounded-lg ${isHovered && 'scale-[0.95]'}`}>
                <img 
                    src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" 
                    alt="about-img" 
                    className={`${isHovered && 'scale-[1.1]'} rounded-lg transition-all duration-500`}
                />
            </div>
        </div>
    </div>
  )
}

export default AboutPage
