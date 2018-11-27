import React from 'react'

const GameOver = props => {

  return (
    <div className="game-over-container">
      {props.wonBy === 1 ? <img src="https://i.imgur.com/JFCqJur.png" alt="" className="winner"/> : <img src="https://i.imgur.com/CkSl5Kq.png" alt="" className="winner" />}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="startNewGame" onClick={props.wipeGame}>
        <h3>A game made by</h3>
        <h1><a href="https://github.com/astrosquid">Chris Bojemski</a> & <a href="http://www.murderpunch.com/blog">Sebastian Karolkiewicz</a></h1>
        <h2>Click to play again!</h2>
      </div>
    </div>
  )
}

export default GameOver
