'use client'

import { useState } from "react";
import { submitForm } from "../lib/loginController";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const msg = submitForm(username, password)
    if (msg === "NO_USER") {
      alert("No user exist.");
    } else if (msg === "WRONG_PASS") {
      alert("Wrong password.")
    } else {
      router.push("frontpage");
    }
  }

  return (
    <>
      <div>
        <p>This is the login site</p>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="flex-col">
          <div>
            <label>Username: </label>
            <input type="text" id="username" placeholder="admin" value={username} className="bg-stone-950 border-white border-2" onChange={(e) => {
              setUsername(e.target.value);
            }}/>
          </div>
          <div>
            <label>Password: </label>
            <input type="password" id="password" placeholder="password" value={password} className="bg-stone-950 border-white border-2" onChange={(e) => {
              setPassword(e.target.value);
            }}/>
          </div>
          <input type="submit" className="cursor-pointer"/>
        </form>
      </div>
    </>
  )
}