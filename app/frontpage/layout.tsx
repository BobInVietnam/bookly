import TopBar from "../ui/TopBar"

export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
      <div className="">
        <div className="top-0 sticky overflow-x-hidden">
          <TopBar/>
        </div>
        {children}
      </div>
  )
}