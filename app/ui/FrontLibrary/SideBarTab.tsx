import { MouseEventHandler } from "react"

export default function SideBarTab({
  title,
  onClick
}: {
  title: string,
  onClick: MouseEventHandler<HTMLDivElement> 
}) {
  return (
    <div className="hover:bg-zinc-800 hover:cursor-pointer" onClick={onClick}>
      <p className="font-sans indent-4 text-xl p-2">{title}</p>
    </div>
  )
}