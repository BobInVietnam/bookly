'use client'
import { MouseEventHandler } from "react"

// Currently not functioning

export default function ScrollingButton({
  onClick
}: {
  onClick: MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <button onClick={onClick}>Test</button>
  )
}