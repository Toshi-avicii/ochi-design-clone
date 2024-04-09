function HoverButton({ text, variant, display, whiteVariant }) {
  if (display === 'block') {
    return (
      <div className="mb-2">
        <button
          className={`px-4 py-1 rounded-full uppercase group relative ${variant === 'dark' ? 'bg-zinc-900 text-white border border-white' : 'bg-transparent text-zinc-900 border border-zinc-900 hover:text-white transition-all duration-600 hover:border-zinc-700'} overflow-hidden ${(variant === 'light' && whiteVariant) ? 'text-white border-[1px] border-white' : ''}`}
        >
          <span className="inline-block relative z-[6] text-sm font-neueMontreal">
            {text}
          </span>
          <div className={`w-64 h-64 rounded-full ${variant === 'dark' ? 'bg-black' : 'bg-zinc-900' } absolute top-0 left-[50%] -translate-x-[50%] z-[5] translate-y-full duration-600 group-hover:-translate-y-20 transition-all text-white`}></div>
        </button>
      </div>
    )

  }
  return (
    <button
      className={`px-4 mb-2 py-1 rounded-full uppercase group relative ${variant === 'dark' && 'bg-zinc-900 text-white border border-white'} ${(variant === 'light' && !whiteVariant) && 'bg-transparent text-zinc-700 border border-zinc-700 hover:text-white transition-all duration-700 hover:border-black' } overflow-hidden ${(variant === 'light' && whiteVariant) ? 'text-white hover:text-zinc-900 border-[1px] border-white' : ''}`}
    >
      <span className="inline-block relative z-[6] text-sm font-neueMontreal">
        {text}
      </span>
      <div className={`w-64 h-64 rounded-full ${variant === 'dark' && 'bg-black' } ${(variant === 'light' && !whiteVariant) && 'bg-zinc-900'} ${(variant === 'light' && whiteVariant) && 'bg-white'} absolute top-0 left-[50%] -translate-x-[50%] z-[5] translate-y-full duration-600 group-hover:-translate-y-20 transition-all text-white`}></div>
    </button>
  )
}

export default HoverButton
