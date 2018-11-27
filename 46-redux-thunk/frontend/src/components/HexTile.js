import React from 'react';

const HexTile = (props) => {

  return (
    <React.Fragment>
      <li
        className="hex"
        onClick={() => props.decideClickAction(props.id, props.monsterId ? props.monsterId : 0)}
      >
        <div className="hexIn">
          <a className="hexLink" href="#">
            <img
              className="tile-background"
              src={props.image}
              alt=""
            />
            <h1>Placeholder</h1>
            {props.monsterId
              ?
              <img
                className={`sprite-${props.direction}`}
                src={props.findMonster(props.monsterId).sprite_front}
                alt={props.findMonster(props.monsterId).name}
                onMouseEnter={() => props.hover(props.monsterId)}
                onMouseLeave={props.unhover}
              />
              :
            null}
            <p>Placeholder</p>
          </a>
        </div>
      </li>
    </React.Fragment>
  )

}

export default HexTile;
