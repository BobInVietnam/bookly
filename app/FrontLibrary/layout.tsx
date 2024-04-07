import SideBar from "../ui/FrontLibrary/SideBar"

export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-row h-screen w-screen">
      <div className="">
        <SideBar/>
      </div>
      <div className="flex grow">
        {children}
      </div>
    </div>
  )
}