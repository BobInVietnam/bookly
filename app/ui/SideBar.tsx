'use client'
import Link from 'next/dynamic'
import Image from 'next/image'
import SideBarTab from './SideBarTab'
import { MouseEventHandler } from 'react'

function ScrollingTab({
  title,
  dest
}: {
  title: string,
  dest: string
}) {
  return (
    <SideBarTab title={title} onClick={() => {

    }}
    />
  )
}

export default function SideBar({
  
}) {
  return (
    <div className="w-[320px] h-full flex-col flex-none justify-center bg-zinc-900 border-zinc-800 border-8">
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