'use client'
import Link from 'next/dynamic'
import Image from 'next/image'
import SideBarTab from './SideBarTab'

export default function SideBar({

}) {
  return (
    <div className="h-screen w-[320px] flex-col flex-none justify-center bg-zinc-900 rounded border-zinc-800 border-8">
      <div className="flex-root w-full text-center bg-transparent p-2">
        <h1 className="text-3xl font-serif">
          <img
            src="/boolky.png"
            width="320"
            height="320"
            className="inline size-12 m-1"
            alt="Icon of sin"
          />
          BOOKLY
        </h1>
      </div>
      <div className="divide-y divide-solid divide-zinc-700">
        <SideBarTab title="Most Popular" onClick={() => {

        }} />
        <SideBarTab title="Recent Uploads" onClick={() => {

        }} />
        <SideBarTab title="Highest Rated" onClick={() => {

        }} />
      </div>
    </div>
  )
}