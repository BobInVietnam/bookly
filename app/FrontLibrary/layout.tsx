'use client'
import SideBar from "../ui/SideBar"
import TopBar from "../ui/TopBar"
import ScrollingButton from "../ui/ScrollingButton"
import { useRef } from "react";

export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const myRef = useRef(null);

  return (
      <div className="flex flex-col grow h-screen">
        <div>
          <TopBar/>
        </div>
        <div className="h-full flex-grow">
          {children}
        </div>
      </div>
  )
}