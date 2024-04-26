import TopBar from "../ui/TopBar"

export default function LibraryLayout({
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