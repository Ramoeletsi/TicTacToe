import React from 'react'
import './Style/Score.css'

const Score = ({score, currentPlayer}) => {
  const{xScore, oScore} = score;
  return (
    
   <div className="scoreBoard">

      <span className={`scores x-score ${!currentPlayer && "inactive"}`}>X - {xScore}</span>
      <span className={`scores o-score ${currentPlayer && "inactive"}`}>O - {oScore}</span>
    </div>
    
  )
}

export default Score