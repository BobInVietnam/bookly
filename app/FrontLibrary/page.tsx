const date = new Date();
import Box from '@/app/ui/FrontLibrary/Box'
import ReturnButton from '../ui/FrontLibrary/ReturnButton';

export default function Page() {
  return <>
    <div className="bg-red-400 ">
      <p>Hello Library</p>
    </div>
    <div className="flex items-center flex-col w-auto h-auto bg-gradient-radial from-blue-900 from-1% to-transparent">
      <Box title="Hello Library" value="There's something in here"/>
      <Box title="Hello Library" value="Huh, is it?"/>
      <Box title="Hello Library" value="Definitely"/>
      <Box title="Hello Library" value="Hmm"/>
    </div>
    <div className="flex items-center flex-col">
      <ReturnButton/>
    </div>
  </>;
}