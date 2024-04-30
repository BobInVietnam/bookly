'use client'
import clsx from "clsx";
import { log } from "console";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
    <div className="flex flex-row me-8 gap-2">
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
      >
        <button 
          className="bg-slate-500"
          onClick={() => logOut()}
        >
          o
        </button>
      </Link>
    </div>
  )
}