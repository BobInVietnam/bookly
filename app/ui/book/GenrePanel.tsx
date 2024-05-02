import { getGenreFromID } from "@/app/lib/data";
import { Book } from "@/app/lib/definitions";

export default function GenrePanel({
  book
}: {
  book: Book
}) {
  return (
    <>
      <div className="rounded bg-slate-600">
        <p className="text-2xl p-4">Genre: {
          book.genres.map(genre_id => {
            return (
              <span className="p-2 rounded bg-slate-500 mx-2">
                {getGenreFromID(genre_id)?.name}
              </span>
            )
          })
        }</p>
      </div>
    </>
  )
}