function AnimatedBorderedText({ text, display, link, uppercase, tableColor }) {
  if(display === 'inline') {
    return (
        <span className="group relative inline-block mx-2 overflow-hidden">
            <span className={`font-neueMontreal ${uppercase ? 'uppercase' : 'capitalize'} ${tableColor ? 'text-zinc-600 text-sm' : 'text-zinc-700' } cursor-pointer inline-block ${link ? 'text-lg' : '' }`}>
              {text}
            </span>
            <span className={`navUnderline w-full ${link ? 'h-[1px]' : 'h-[3px]'} group-hover:translate-x-full ${tableColor ? 'bg-zinc-500' : 'bg-zinc-800'}`}></span>
        </span>
    )
  }
  return (
    <div>
        <div className="group relative overflow-hidden inline-block">
            <p className={`font-neueMontreal ${uppercase ? 'uppercase' : 'capitalize'} cursor-pointer inline-block ${link ? 'text-lg' : '' }`}>
                {text}
            </p>
            <div className={`navUnderline inline-block w-full ${link ? 'h-[1px]' : 'h-[3px]'} group-hover:translate-x-full bg-zinc-800`}></div>
        </div>
    </div>
  )
}

export default AnimatedBorderedText
