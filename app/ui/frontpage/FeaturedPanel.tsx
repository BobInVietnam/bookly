'use client'
import { Book } from "@/app/lib/definitions"
import Link from "next/link"


/**
 * Where featured books are displayed. (Under construction)
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
      <div className="bg-slate-900 h-[500px] grid grid-cols-3 gap-4 py-8">
        <Link href="book" onClick={() => {
          localStorage.setItem("currentBook", JSON.stringify(books[0]))
        }}>
          <img className="object-contain object-center w-full h-full p-4"
            src={books[0].cover_image}
          >  
          </img>
        </Link>
        <div className = "col-span-2 grow">
          <div className="grid grid-rows-4 gap-2">
            <div>
              <p className="text-3xl font-bold">{books[0].title}</p>
            </div>
            <div>
              <p className="text-xl font-semibold italic">{books[0].author}</p>
            </div>
            <div className="row-span-2">
              <p className="">{books[0].description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}