import { Book } from "@/app/lib/definitions";

export default function DescriptionPanel({
  book
}: {
  book: Book
}) {
  return (
    <>
      <div className="rounded bg-slate-600 flex-col">
        <div className="p-4">
          <p className="text-2xl">Description</p>
        </div>
        <div className="p-4">
          <p className="">{book.description}</p>
        </div>
      </div>
    </>
  )
}