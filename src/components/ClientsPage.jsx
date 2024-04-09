import AnimatedBorderedText from "./ui/AnimatedBorderedText"
import AnimatedButton from "./ui/AnimatedButton"
import HoverButton from "./ui/HoverButton"

function ClientsPage() {
    const clients = [
        {
            company: 'planetly',
            person: 'nina walloch'
        },
        {
            company: 'workiz easy',
            person: 'tomer levy'
        },
        {
            company: 'premium blend',
            person: 'ellen kim'
        },
        {
            company: 'hypercare systems',
            person: 'brendan goss'
        },
        {
            company: 'officevibe',
            person: 'raff labrie'
        },
        {
            company: 'orderlion',
            person: "stefan strohmer"
        },
        {
            company: 'black book',
            person: 'jaci smith'
        },
        {
            company: 'trawa energy',
            person: 'david budde'
        }
    ]
    return (
        <div className="bg-slate-50">
            <div className="pb-6">
                <div className="lg:px-10 px-4 pb-10 border-b border-zinc-400">
                    <h1 className="font-neueMontreal text-[8.5vw] lg:text-[4vw] text-zinc-800">Clients' reviews</h1>
                </div>
                <div className="lg:px-10 px-4 flex flex-col lg:flex-row mt-6 min-h-[20vw]">
                    <div className="-mx-2 flex-[2]">
                        <AnimatedBorderedText display="inline" text="karman ventures" link={true} />
                    </div>
                    <div className="flex-[2] my-8 lg:my-0">
                        <p className="font-neueMontreal mb-4">Services:</p>
                        <div className="mt-4">
                            <HoverButton text="investor deck" variant="light" display="block" />
                            <HoverButton text="sales deck" variant="light" display="block" />
                        </div>
                    </div>
                    <div className="flex-[3]">
                        <div className="flex justify-between items-center">
                            <p className="capitalize text-zinc-700 font-neueMontreal">William barnes</p>
                            <p className="text-zinc-400 uppercase font-neueMontreal">read</p>
                        </div>
                        <div className="mt-8">
                            <img
                                className="rounded-lg w-24 h-24"
                                src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
                                alt="william barnes"
                            />
                            <p className="mt-8 font-neueMontreal w-[75%] text-[16px] text-zinc-600">
                                They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* clients table */}
            <div className="divide-y-[1px] divide-zinc-400 mt-[5vw]">
                {
                    clients.map((item, index) => {
                        return (
                            <div
                                className="lg:px-10 px-4 py-4 w-full flex items-center first:border-t-[1px] last:!border-b-[1px] first:border-zinc-400 last:border-zinc-400"
                                key={index}
                            >
                                <div className="flex-[50] ">
                                    <AnimatedBorderedText
                                        display="inline"
                                        tableColor={true}
                                        link={true}
                                        text={item.company}
                                    />
                                </div>
                                <p className="hidden lg:block font-neueMontreal capitalize flex-[25] text-zinc-600 text-sm">{item.person}</p>
                                <div className="flex-[25] flex items-center justify-end">
                                    <AnimatedBorderedText display="inline" link={true} text="read" tableColor={true} uppercase={true} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            {/* cards */}
            <div className="cards flex px-4 lg:px-10 mt-[10vw] gap-4 pb-20 flex-wrap flex-col lg:flex-row">
                {/* card */}
                <div className="bg-[#004D43] flex-[2] justify-between flex flex-col p-4 rounded-xl min-h-[40vh] lg:min-h-[25vw]">
                    {/* card img */}
                    <div className="flex justify-center items-center w-full h-full pt-20 lg:pt-0">
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    </div>
                    {/* card btn */}
                    <div>
                        <button
                            className={`px-4 py-1 rounded-full uppercase border-[1px] border-lime-500`}
                        >
                            <span className="text-sm text-lime-500 font-neueMontreal">
                                @2019-2022
                            </span>
                        </button>
                    </div>
                </div>

                {/* card */}
                <div className="bg-[#212121] flex-1 justify-between flex flex-col p-4 rounded-xl min-h-[40vh] lg:min-h-[25vw]">
                    {/* card img */}
                    <div className="flex justify-center items-center w-full h-full pt-20 lg:pt-0">
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    </div>
                    {/* card btn */}
                    <div>
                        <HoverButton variant="light" display="inline" whiteVariant={true} text="rating 5.0 on clutch" />
                    </div>
                </div>

                 {/* card */}
                 <div className="bg-[#212121] flex-1 justify-between flex flex-col p-4 rounded-xl min-h-[40vh] lg:min-h-[25vw]">
                    {/* card img */}
                    <div className="flex justify-center items-center w-full h-full pt-12 lg:pt-0">
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" className="w-[100px]" />
                    </div>
                    {/* card btn */}
                    <div>
                        <HoverButton variant="light" display="inline" whiteVariant={true} text="business bootcamp alumni" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientsPage
