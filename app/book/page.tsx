'use client'
import Link from "next/link";
import TitlePane from "../ui/book/TitlePane";
import { Book } from "../lib/definitions";
import SideBar from "../ui/SideBar";
import GenrePanel from "../ui/book/GenrePanel";
import DescriptionPanel from "../ui/book/DescriptionPanel";
import ChapterPanel from "../ui/book/ChapterPanel";

const sideBarTabs = [
  {
    tabTitle: "Featured",
    destination: "Featured"
  },
  {
    tabTitle: "Top Favourites",
    destination: "Top Favourites"
  },
  {
    tabTitle: "Recent Uploads",
    destination: "Recent Uploads"
  }
]

export default function Page() {
  
  var bookString = localStorage.getItem("currentBook");
  var book = Book();
  if (bookString !== null) {
    book = JSON.parse(bookString);
  }
  return (
    <div className="flex-row">
      {/* Side bar for navigation in-page */}
      <div className="h-full grow fixed bg-zinc-900 border-zinc-800 border-8">
        <SideBar tabs={sideBarTabs}/>
      </div>

      <div className="flex flex-row h-full">
        <div className="flex grow flex-col w-full gap-y-6 bg-gray-800 pl-[336px]">
          <div className="flex-col">
            <TitlePane book={book}/>
            <div className="mx-12 space-y-4">
              <GenrePanel book={book}/>
              <DescriptionPanel book={book}/>
              <ChapterPanel book={book}/>
            </div>
            <Link
              href="book/readsite"
              className="flex aspect-square w-[100px] bg-red-700"
            >
              <p>Tap here to go to read site</p>
            </Link>
          </div>     
        </div>
        
      </div>
    </div>
  )
}