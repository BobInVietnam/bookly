import TestRef from "../ui/testComponent/TestRef";
import TicTacToe from "../ui/testComponent/TicTacToe";

export default function Page() {
  return (
    <>
      <div className="w-96 h-96 flex justify-center items-center">
        <TicTacToe/>
        <TestRef/>
      </div>
    </>
  )
}