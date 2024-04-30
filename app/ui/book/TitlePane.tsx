import { Book } from "@/app/lib/definitions";

export default function TitlePane({
  book
}: {
  book: Book
}) {

  const temp = localStorage.getItem("currentBook")
  if (temp !== null) {
    const bookInfo = JSON.parse(temp);
  }

  return (
    <div>
      <img>
      </img>
    </div>
  )
}