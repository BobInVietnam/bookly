'use client'
import SideBarTab from './SideBarTab'
import { MouseEventHandler } from 'react'

/**
 * A fixed side bar used for various navigation purpose.
 * @returns A side bar.
 */

export default function SideBar({
  tabs
}: {
  tabs: Array<{tabTitle: string, destination: string}>
}) {
  return (
    <div className="w-[320px] h-full flex-col flex-none justify-center bg-zinc-900 border-zinc-800 border-8">
      <div className="divide-y divide-solid divide-zinc-700">
        {
          tabs.map((tab, i) => <SideBarTab title={tab.tabTitle} destination={tab.destination} key={i}/>)
        }
      </div>
    </div>
  )
}