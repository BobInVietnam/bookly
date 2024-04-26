'use client'
import {User} from "@/app/lib/definitions"

export default function Page() {

  var userData = {
    user_id: "123",
    password: "123",
    profile_pic: "public\thumbnails\absolute_kino.jpg"
  }
  
  return (
    <>
      <div>
        <p>This is the login site</p>
      </div>
      <div>
        <button 
          className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium text-gray-900 hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3" 
          onClick={() => {
            localStorage.setItem("user", JSON.stringify(userData));
            alert("Logged in");
          }}
        >
          Press the button to send info to localStorage
        </button>
      </div>
    </>
  )
}