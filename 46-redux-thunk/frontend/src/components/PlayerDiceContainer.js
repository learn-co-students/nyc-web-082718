import React from 'react';
import ReactDice from 'react-dice-complete';

const PlayerDiceContainer = props => {
  const rollDoneCallback = num => {
    props.diceValueMultiplexer(props.playerId, num)
  }

  return (
    <div className={props.playerId === 1 ? "playerOneDiceTray" : "playerTwoDiceTray"}>
      <h2 className="diceHeader">Player {props.playerId === 1 ? "1" : "2"}</h2>
      <br />
      <ReactDice
        key={"playerDiceTray_" + props.playerId}
        numDice={1}
        rollDone={rollDoneCallback}
        faceColor="rgb(153,0,0)"
        dotColor="rgb(251,251,251)"
        outline="true"
        outlineColor="rgb(102,0,0)"
        dieSize={75}
      />
      <h3>Move:<br />{props.currentTurn.move ? props.currentTurn.move : '-'}<br /><br /></h3>
      <h3>Attack:<br />{props.currentTurn.attack ? props.currentTurn.attack : '-'}<br /><br /></h3>
    </div>
  )
}

export default PlayerDiceContainer
