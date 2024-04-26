import { MouseEventHandler } from "react"

export default function Button({
  text,
  onClick
}: {
  text: string
  onClick: MouseEventHandler
}) {
  return (
    <button className="grow rounded-md bg-slate-600 hover:bg-slate-500 cursor-pointer" onClick={onClick}>
      {text}
    </button>
  )
}