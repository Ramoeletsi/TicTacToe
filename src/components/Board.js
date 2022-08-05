import React from 'react'
import Square from './Square'
import './Style/Board.css'

const Board = ({board, onClick}) => {
  return (
    <div className='board'>
    {board.map((value, idx)=>{
        return <Square value={value} onClick={()=> value === null && onClick(idx)}/>
    })}
    </div>
  )
}

export default Board;