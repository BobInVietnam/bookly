'use client'
import { MouseEventHandler } from "react"

export default function ScrollingButton({
  onClick
}: {
  onClick: MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <button onClick={onClick}>Test</button>
  )
}