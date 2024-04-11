import Box from '@/app/ui/Box'
import ReturnButton from '../ui/FrontLibrary/ReturnButton';
import SideBar from '../ui/SideBar';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-row h-full">
      <div className="">
        <SideBar/>
      </div>
      <div id="main" className="flex-grow w-full overflow-y-auto">
        <div className="bg-slate-600 h-20">
          <p>Hello Library</p>
        </div>
        <div className="flex items-center flex-col w-auto h-auto bg-gradient-radial from-blue-900 from-5% to-transparent">
        </div>
        <div className=''>

        </div>
        <div className="flex items-center flex-col">
          <ReturnButton/>
        </div>
        <div>
          <Link 
            href="TicTacToe"
            className="rounded"
          >
            <button>lol</button>
          </Link>
        </div>
      </div>
    </div>
  )
}