import React, { useState } from 'react';
import './Game.css';
import Square from './Square'

const Board = () => {
  const initialSquares = new Array(9).fill(null);
  const [squares,setSquares] = useState(initialSquares);
  const [isX,setIsX] = useState(true)

  const handleClickEvent = (i) => {
    const newSquares = [...squares];
    if (!newSquares[i] && (!winner)) {
      numberOfTurns++;
      if (isX) {
        setIsX(false);
        newSquares[i] = 'X';
      } else {
        setIsX(true);
        newSquares[i] = 'O';
      }
    setSquares(newSquares);
    }
  };

  let numberOfTurns = 0;
  const winner = calculateWinner(squares,numberOfTurns);
  let status;
  switch(winner) {
    case("X"):
      status = `Player ${winner} won!!!`;
      break;
    case("O"):
      status = `Player ${winner} won!!!`;
      break;
    case("tie"):
      status = 'It is a tie, nobody won';
      break;
    default:
      status = `Player ${isX ? 'X' : 'O'} has a turn.`
  }

  const renderSquare = (i) => {
    return  (
      <Square 
        value={squares[i]}
        onClickEvent={() => handleClickEvent(i)}/>
    );
  };

  return (
    <div>
      <div className="status">
        {status}
      </div>
      <div className="board-row">
        {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
      </div>
    </div>
  )
}

const calculateWinner = (squares,numberOfTurns) => {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  for (let line of lines) {
    const [a,b,c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[c] === squares[b]) {
      return squares[a];
    } else if (numberOfTurns === 9) {
      return "tie"
    }
  }
  return null
}

export default Board;