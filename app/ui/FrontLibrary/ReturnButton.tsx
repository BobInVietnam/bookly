import Link from "next/link"

export default function ReturnButton() {
  return <>
     <Link
      key="Return"
      href="/.."
     >
      <button className="rounded-md bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 px-4 py-1" >Go back</button>
     </Link>
  </>
}