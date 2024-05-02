'use client'
import { getChapterFromID } from "@/app/lib/data"
import Button from "@/app/ui/Button";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  var chapterString = localStorage.getItem("chapter_id");
  var chapter = {
    chapter_id: 0
  }
  if (chapterString !== null) {
    chapter = JSON.parse(chapterString);
  }
  const chapterContent = getChapterFromID(chapter.chapter_id)?.content;
  return (
    <div>
      <p>{chapterContent}</p>
      <Button text="Back to Book page" onClick={() => {
        router.back();
      }}/>
    </div>
  )
}