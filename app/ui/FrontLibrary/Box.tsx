import Link from "next/link";

export default function Box(
  {
    title,
    value
  }: {
    title: string;
    value: string;
  }
) {
  return (
    <div className="w-2/3 h-48 bg-indigo-900 my-2 rounded-md">
      <div className="bg-indigo-400 rounded-md">
        <h1 className="text-center ">{title}</h1>
      </div>
      <p className="text-center font-mono">{value}</p>
    </div>
  )
}