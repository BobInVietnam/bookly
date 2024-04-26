import Box from '@/app/ui/testComponent/Box'
import ReturnButton from '../ui/frontpage/ReturnButton';
import SideBar from '../ui/SideBar';
import Link from 'next/link';
import Collection from '../ui/frontpage/Collection';
import BookPanel from '../ui/frontpage/BookPanel';
import { loadBookData } from '../lib/data';
import FeaturedPanel from '../ui/frontpage/FeaturedPanel';

const someBooks = loadBookData();

const someFeatured = [someBooks[0], someBooks[2], someBooks[4]];

const sideBarTabs = [
  {
    tabTitle: "Featured",
    destination: "Featured"
  },
  {
    tabTitle: "Top Favourites",
    destination: "Top Favourites"
  },
  {
    tabTitle: "Recent Uploads",
    destination: "Recent Uploads"
  }
]

export default function Page() {
  return (
    <div className="flex-row scroll-smooth">
      {/* Side bar for navigation in-page */}
      <div className="h-full grow fixed bg-zinc-900 border-zinc-800 border-8">
        <SideBar tabs={sideBarTabs}/>
      </div>

      {/* The main section which will contain collections of ranked (or recent) books */}
      <div className="flex flex-row h-full">
        <div id="main" className="flex grow flex-col w-full gap-y-6 bg-gray-800 pl-[336px]">
          <FeaturedPanel books={someFeatured}/>
          <div id="Featured">
            <Collection books={someBooks} title="Featured"/>
          </div>
          <div id="Top Favourites">
            <Collection books={someBooks} title="Top Favorite"/>
          </div>
          <div id="Recent Uploads">
            <Collection books={someBooks} title="Recent Uploads"/>
          </div>
          {/* <div className="flex items-center flex-col">
            <ReturnButton/>
          </div> */}
          {/* <div>
            <Link 
              href="TicTacToe"
              className="rounded"
            >
              <button>lol</button>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  )
}