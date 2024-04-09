function NavLink({ text }) {
  return (
    <div className="navLink group">
        <p className="linkText group-hover:-translate-y-full">
            {text}
        </p>
        <p className="linkText group-hover:-translate-y-full">{text}</p>
        <div className="navUnderline group-hover:w-full group-hover:h-[1px] delay-75"></div>
    </div>
  )
}

export default NavLink
