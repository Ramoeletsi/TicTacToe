import React, {useState} from 'react';
import Score from './components/Score';
import Board from './components/Board';
import ResetButton from './components/ResetButton';

function App() {

  
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setcurrentPlayer] =useState(true);
  const [score, setScore] = useState({ xScore: 0, oScore: 0 })
  const [gameOver, setGameOver] = useState(false)

  const WinningCombo =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const handleSquareClick = (squareIdx) =>{
    const updateBoard = board.map((value, idx)=>{
      if(idx === squareIdx){
        return currentPlayer === true ? "X" : "O";
      }else{
        return value;
      }
      
    })

    const winner = checkWinner(updateBoard);

    if(winner) {
      if(winner === 'O'){
        let {oScore} = score;
        oScore += 1
        setScore({...score, oScore})
        

      }else{
        let {xScore} = score;
        xScore += 1
        setScore({...score, xScore})
        
      }
    }

    setBoard(updateBoard);
    setcurrentPlayer(!currentPlayer);
  }

  const checkWinner = (board) => {
    for (let i= 0; i<WinningCombo.length; i++){
      const [x,y,z] = WinningCombo[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true)
        return board[x];
      }
    }
  }
  const resetBoard = () =>{
    setGameOver(false)
    setBoard(Array(9).fill(null))
    
  }

  return (
    <div className="App">
      <h1>TIC TAC TOE</h1>

        <Score score={score} />
        <Board board = {board} onClick={ gameOver ? resetBoard : handleSquareClick}/>
        <ResetButton resetBoard={resetBoard}/>
    </div>
    
  );
}

export default App;
