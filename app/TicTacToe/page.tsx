import TestRef from "../ui/TestRef";
import TicTacToe from "../ui/TicTacToe";

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