'use client'
import { Link as ScrollLink } from "react-scroll"

// Currently doing nothing

export default function SideBarTab({
  title,
  destination
}: {
  title: string,
  destination: string
}) {
  return (
    <ScrollLink className="hover:bg-zinc-800 hover:cursor-pointer"
      to={destination}
      smooth={true}
      duration={500}
    >
      <p className="font-sans indent-4 text-xl p-2">{title}</p>
    </ScrollLink>
  )
}