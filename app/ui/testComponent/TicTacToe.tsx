'use client'
import { MouseEventHandler, useState } from "react";

// For testing

function Square({value, onSquareClick}: { value: String, onSquareClick: MouseEventHandler<HTMLButtonElement>}) {
  return <button className="aspect-square bg-zinc-700" onClick={onSquareClick}>
      {value}
    </button>
}


export default function Board() {

  const [squares, setSquare] = useState(Array<any>(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function calculateWinner(squares: Array<any>) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }


  function handleClick(i: number) {
    if (squares[i] !== null) {
      return;
    } else {
      const nextSquares = squares.slice();
      if (xIsNext === true ) {
        nextSquares[i] = "X";
      } else {
        nextSquares[i] = "O";
      }
      setSquare(nextSquares);
      setXIsNext(!xIsNext);
      if (calculateWinner(nextSquares) === "X") {
        console.log("X won");
      } else if (calculateWinner(nextSquares) === "O") {
        console.log("O won");
      } else {
        return;
      }
    }

  }

  return (
    <>
    <div className="grid grid-cols-3 grid-rows-3 w-[100px] h-[100px] aspect-square gap-2 m-4 bg-zinc-9000">
      {
        squares.map((i, x) => <Square value={i} onSquareClick={() => handleClick(x)}/>)
      }
    </div>
    </>
  )
}