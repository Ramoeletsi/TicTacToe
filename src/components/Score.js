import React from 'react'
import './Style/Score.css'

const Score = ({score, xPlaying}) => {
  const{xScore, oScore} = score;
  return (
    <div className="scoreBoard">
      <span className={`scores x-score ${!xPlaying && "inactive"}`}>X - {xScore}</span>
      <span className={`scores o-score ${xPlaying && "inactive"}`}>O - {oScore}</span>
    </div>
  )
}

export default Score