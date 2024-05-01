import { Book } from "@/app/lib/definitions";

export default function TitlePane({
  book
}: {
  book: Book
}) {

  return (
    <div className="">
      <img src={book.cover_image}>
      </img>
      <div>
        <p>{book.author}</p>
      </div>
    </div>
  )
}