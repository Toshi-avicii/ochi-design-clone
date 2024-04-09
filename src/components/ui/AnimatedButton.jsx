import { IoMdArrowUp } from "react-icons/io"

function AnimatedButton({ variant, text, hover, setHovered }) {
  const mouseHandler = (e) => {
    if(!hover && !setHovered) return;

    setHovered(true);
  }

  const mouseLeaveHandler = (e) => {
    if(!hover && !setHovered) return;
    setHovered(false);
  }
  return (
    <button 
        onPointerEnter={mouseHandler}
        onPointerLeave={mouseLeaveHandler}
        className={`py-2 flex justify-center items-center gap-4 pl-6 pr-3 rounded-full uppercase group relative ${variant === 'dark' ? 'bg-zinc-900 text-white' : 'bg-transparent text-zinc-700 border-[1px] border-zinc-700 hover:text-white transition-all duration-500   '} overflow-hidden`}
    >
        <span className="inline-block relative z-[6] text-sm font-neueMontreal">
            {text}
        </span>
        <div className="bg-transparent h-10 w-10 flex justify-center items-center z-10">
            <div 
                className={`icon w-2 h-2 rounded-full transition-all ${variant === 'dark' ? 'bg-white' : 'bg-zinc-900 group-hover:bg-white'} group-hover:w-10 group-hover:h-10 flex justify-center items-center`}
            >
                <IoMdArrowUp className={`text-2xl rotate-45 opacity-0 group-hover:opacity-100 ${variant === 'dark' ? 'text-black' : 'text-white group-hover:text-zinc-900'}`} />
            </div>
        </div>
        <div className="w-64 h-64 rounded-full bg-black absolute top-0 left-[50%] -translate-x-[50%] z-[5] translate-y-full duration-500 group-hover:-translate-y-20 transition-all">

        </div>
    </button>
  )
}

export default AnimatedButton
