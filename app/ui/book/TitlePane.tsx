import { getScore } from "@/app/lib/data";
import { Book } from "@/app/lib/definitions";

export default function TitlePane({
  book
}: {
  book: Book
}) {

  const rating = getScore(book);
  return (
    <>
    <div className="h-[350px] bg-inherit">
      <div className="grid grid-cols-5 h-[200px] bg-slate-700">
        <img src={book.cover_image} className="min-w-[200px] pl-8 pt-12 aspect-[1/1.414] object-cover">
        </img>
        <div className="grid grid-rows-7 col-span-4 gap-2 px-6">
          <div className="row-span-4 self-end">
            <p className="text-4xl text-wrap">{book.title}</p>
          </div>
          <div className="row-span-2 self-center">
            <p className="text-xl text-wrap italic">{book.author}</p>
          </div>
          <div className="grid grid-cols-5 gap-7">
            <div className="rounded bg-slate-700 col-span-2">
              <p className="text-center">Last Updated: {book.last_update}</p>
            </div>
            <div className="rounded bg-slate-700">
              <p className="text-center text-2xl">👁 {0}</p>
            </div>
            <div className="rounded bg-slate-700">
              <p className="text-center text-2xl">❤︎ {0}</p>
            </div>
            <div className="rounded bg-slate-700">
              <p className="text-center text-2xl">★ {rating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}