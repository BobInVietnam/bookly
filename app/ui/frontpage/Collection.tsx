import { Book } from "@/app/lib/definitions";
import BookPanel from "./BookPanel";

/**
 * A horizontal book collection that is used to display books on the front page.
 * @param Books stored in an array
 * @param Title that will display the collection's...title?
 * @returns A collection containing multiple book panels
 */
export default function Collection({
  books,
  title
}: {
  books: Array<Book>,
  title: String
}) {
  return (
    <div className="flex flex-col bg-slate-700">
      <div>
        <p className="text-3xl font-sans-serif text-center p-2">{title}</p>
      </div>
      <div className="flex flex-row gap-x-4 w-auto h-auto bg-gradient-radial from-blue-900 from-5% to-transparent overflow-x-scroll">
        {books.map((x) => 
            <BookPanel book={x} key={x.title} />
          )}
      </div>
    </div>
  );
}