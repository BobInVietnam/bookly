import { getChapterFromID } from "@/app/lib/data"
import { Book } from "@/app/lib/definitions"
import Link from "next/link"

export default function ChapterPanel({
  book
}: {
  book: Book
}) {
  return (
    <>
      <div className="rounded bg-slate-600 flex-col">
        <div className="w-full p-2">
          <p className="text-center text-2xl">Chapters</p>
        </div>
        <div className="flex-col space-y-2 p-2">
          {
            book.chapters.map(chapter => {
              const chapterInfo = getChapterFromID(chapter)
              return (
                <Link
                  href="/book/readsite"
                  onClick={() => {
                    const chapterID = {
                      chapter_id: chapterInfo?.chapter_id
                    }
                    localStorage.setItem("chapter_id", JSON.stringify(chapterID))
                  }}
                >
                  <div className="rounded bg-slate-500 m-2">
                    <p>{chapterInfo?.title}</p>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </>
  )
}