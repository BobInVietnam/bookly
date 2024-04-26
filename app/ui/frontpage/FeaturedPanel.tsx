import { Book } from "@/app/lib/definitions"


/**
 * Where featured books are displayed.
 * @param Books to cycle through every couple of seconds.
 * @returns 
 */
export default function FeaturedPanel({
  books
}: {
  books: Array<Book>
}) {
  return (
    <>
      <div className="bg-slate-900 h-[500px]">
        <div className="">
          <p>PLACEHOLDER</p>
        </div>
      </div>
    </>
  )
}