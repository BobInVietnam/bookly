'use client'
import clsx from "clsx";
import { log } from "console";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "./Button";

/**
 * User profile button.
 * @returns 
 */
export default function UserShortcut() {
  
  const router = useRouter();
  var reference;

  if (!localStorage.getItem("user")) {
    reference = "/login";
  } else {
    reference = "/user";
  }

  const logOut = () => {
    localStorage.removeItem("user");
    alert("Logged out");
    router.push("/frontpage");
  }

  return (
    <div className="flex flex-row me-8 gap-2 justify-center">
      <Link
        href={reference}
        className=""
      >
        <img 
          src="/profile.svg" 
          width="40"
          className=""
        ></img>
      </Link>
      <Link
        href="/frontpage"
        className=""
      >
        <Button text="O" onClick={() => {
          localStorage.removeItem("user");
          router.refresh();
        }}/>
      </Link>
    </div>
  )
}