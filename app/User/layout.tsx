'use client'
import SideBar from "../ui/SideBar"
import TopBar from "../ui/TopBar"

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
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