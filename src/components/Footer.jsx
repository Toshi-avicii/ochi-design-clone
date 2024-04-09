import AnimatedBorderedText from "./ui/AnimatedBorderedText"

function Footer() {
    return (
        <div 
            data-scroll
            data-scroll-speed="-0.05"
            className="min-h-screen w-full rounded-tl-xl rounded-tr-xl bg-slate-50 flex flex-col lg:flex-row px-4 py-10 lg:p-10 justify-between"
        >
            <div className="box-1 flex-1 flex flex-col justify-between items-start">
                <h1 className="flex lg:flex-col justify-start items-start h-full">
                    <span className="block font-founderGrotesk text-[20vw] lg:text-[10vw] uppercase leading-none font-bold lg:-mb-8">Eye-</span>
                    <span className="block font-founderGrotesk text-[20vw] lg:text-[10vw] uppercase leading-none font-bold">Opening</span>
                </h1>
            </div>
            <div className="flex flex-1 flex-col gap-y-4">
                <h1 className="font-founderGrotesk text-[20vw] lg:text-[10vw] uppercase leading-none font-bold">
                    presentations
                </h1>
                <div className="flex flex-col justify-center items-start">
                    <p className="font-neueMontreal">S:</p>
                    <AnimatedBorderedText text="Instagram" link={true} />
                    <AnimatedBorderedText text="Behance" link={true} />
                    <AnimatedBorderedText text="Facebook" link={true} />
                    <AnimatedBorderedText text="LinkedIn" link={true} />
                </div>
                <div className="flex justify-between items-start">
                    <div className="address flex flex-col">
                        <p className="font-neueMontreal">L:</p>
                        <AnimatedBorderedText text="202-1965 W 4th Ave" link={true} />
                        <AnimatedBorderedText text="vancouver, canada" link={true} />
                        <AnimatedBorderedText text="30 Chukarina St" link={true} />
                        <AnimatedBorderedText text="Lviv, Ukraine" link={true} />
                    </div>

                    <div className="address flex flex-col">
                        <p className="font-neueMontreal">M:</p>
                        <AnimatedBorderedText text="Home" link={true} />
                        <AnimatedBorderedText text="servicess" link={true} />
                        <AnimatedBorderedText text="our work" link={true} />
                        <AnimatedBorderedText text="about us" link={true} />
                        <AnimatedBorderedText text="insights" link={true} />
                        <AnimatedBorderedText text="contact us" link={true} />
                    </div>

                </div>
                <div className="flex flex-col justify-center items-start">
                    <p className="font-neueMontreal">E:</p>
                    <AnimatedBorderedText text="hello@ochi.design" link={true} />
                </div>
            </div>
        </div>
    )
}

export default Footer
