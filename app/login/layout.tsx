
export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
        <div className="h-full flex-grow">
          {children}
        </div>
  )
}