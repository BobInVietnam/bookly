import Box from '@/app/ui/testComponent/Box'
import ReturnButton from '../ui/frontpage/ReturnButton';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="">
      <div>
        <div className="relative bg-transparent h-auto">
          <div className="bg-slate-800 h-[400px]">
          <div className="bg-zinc-700 w-40 h-48 absolute top-60 left-10"></div>
        </div>    
      </div>
      
        <div className="flex items-center flex-col w-auto h-auto bg-gradient-radial from-blue-900 from-5% to-transparent">
        <Link
          href="user/settings"
        >
          <p>To setting</p>
        </Link>
          <Box title="Hello Library" value="There's something in here"/>
          <Box title="Hello Library" value="Huh, is it?"/>
          <Box title="Hello Library" value="Definitely"/>
          <Box title="Hello Library" value="Hmm"/>
        </div>
        <div className=''>

        </div>
        <div className="flex items-center flex-col">
          <ReturnButton/>
        </div>
      </div>
    </div>
  )
}