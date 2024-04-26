import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Link
        href="book/readsite"
        className="flex aspect-square w-[100px] bg-red-700"
      >
        <p>Tap here to go to read site</p>
      </Link>
      
    </div>
  )
}