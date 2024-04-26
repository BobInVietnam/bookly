import Link from "next/link"
import Logo from "./Logo"
import UserShortcut from "./UserShortcut"

/**
 * The top bar. Contains the logo, search field and user profile button.
 * @returns A fixed top bar
 */
export default function TopBar() {
  return (
    <div className="bg-slate-800 w-screen h-auto gap-x-4 border-b-4 border-zinc-700 grid grid-cols-3">
      <div className="flex justify-start ps-16">
        <Logo/>
      </div>
      <div className="flex col-span-2 justify-end items-center gap-x-6 pe-6">
        <div className="">
          <input type="text" className="border-2 border-zinc-400 rounded-md w-80 h-8 text-left align-middle cursor-text bg-inherit indent-2 text-lg" placeholder="Text here"/>
        </div>
        <UserShortcut/>
      </div>
    </div>
  )
}