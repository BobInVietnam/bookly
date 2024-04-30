'use client'
import Link from "next/link";
import { Book } from "@/app/lib/definitions";
import { useState } from "react";

/**
 * Book panel that, when clicked, display the book's title, author name and a short description.
 * Is (usually) stored in a collection
 * @param Book 
 * @returns A book panel
 */

export default function BookPanel({
    book
  }: {
    book: Book
}) {
  const [open, setOpen] = useState("hidden");

  return (
    <>
        <div className="flex flex-row bg-gray-800" 
          onClick={() => {
            if (open === "hidden") {
              setOpen("");
            } else {
              setOpen("hidden")
            }
          }}  
        >
          <div className="aspect-[1/1.414] h-[300px] bg-slate-400 m-2">
            <img src={book.cover_image} alt={book.cover_image} className="object-cover aspect-[1/1.414] h-[300px]"/>
          </div>
          <div className={"bg-slate-700 min-w-56 max-w-64 p-2 max-h-[300px] m-2 " + open} >
            <div className="h-[85%] flex-col overflow-hidden">
              <p className="text-lg text-ellipsis">{book.title}</p>
              <p className="text-ellipsis">{book.author}</p>
              <p className="text-ellipsis">{book.description}</p>
            </div>
            <Link href="book" onClick={() => {
              localStorage.setItem("currentBook", JSON.stringify(book))
            }}>
              <p className="text-lg">Read Book</p>
            </Link>
          </div>
        </div>
    </>
  )
}