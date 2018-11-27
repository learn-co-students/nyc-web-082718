import React from 'react'
import GameBoard from './GameBoard';
import PlayerDiceContainer from './PlayerDiceContainer';

class GameInstance extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locked: 0,
      hovered: 0,
      currentTurn: 0,
      stage: 'unstarted',
      p1Turn: 0,
      p1Move: 0,
      p1Attack: 0,
      p2Turn: 0,
      p2Move: 0,
      p2Attack: 0,
    }
  }

  stageProg = {
    unstarted: 'checkGameState',
    checkGameState: 'rollTurn',
    rollTurn: 'rollMove',
    lock: 'rollMove',
    rollMove: 'rollAttack',
    rollAttack: 'move',
    move: 'attack',
    attack: 'cleanBoard',
    cleanBoard: 'checkWin',
    checkWin: 'playerEquivalence',
    playerEquivalence: 'resetTurnValues',
    resetTurnValues: 'checkGameState'
  }

  // 1. start game
  // 1a. check if game is over
  // 2. roll turn dice to decide who goes first
  // 3. lock other player’s controls
  // 4. roll other dice
  // 5. select monster to move
  // 6. (perform checks, then) move monster to specified tile/attack other monster at panel
  // 7. unlock other player’s controls

  // stage: check game -> roll turns -> action select -> action checks -< back to select/perform action -> turn end

  renderHoverCard = (monsterId) => {
    let monster = this.findMonsterInTeams(monsterId)
    let hoveredState = `Name: ${this.capitalizeName(monster.name)}, Level: ${monster.evo_level}, HP: ${monster.hp}, Power: ${monster.power}`
    this.setState({ hovered: hoveredState })
  }

  capitalizeName = (monsterName) => {
    return monsterName.charAt(0).toUpperCase() + monsterName.slice(1)
  }

  unrenderHoverCard = () => {
    this.setState({ hovered: 0 })
  }

  getTurnInstructions = () => {
    const turn = this.state.currentTurn
    const player = turn === 1 ? "Player 1, " : turn === 2 ? "Player 2, " : ''
    if (!this.state.p1Turn || !this.state.p2Turn) {
      return "Roll to see who goes first!"
    }

    const phase = this.state.stage
    if (phase === 'rollMove') {
      return `${player}roll to see how far you can move your Pokémon!`
    }

    if (phase === 'rollAttack') {
      return `${player}roll for damage against neighboring Pokémon!`
    }

    if (phase === 'move') {
      return `${player}move one of your Pokémon!`
    }

    if (phase === 'attack') {
      return `${player}ATTACK!`
    }

    return ''
  }

  getBannerText = () => {
    return this.state.hovered ? this.state.hovered : this.getTurnInstructions()
  }

  findMonsterInTeams = monsterId => {
    const team1Monster = this.props.team1Roster.find( monster => {
      return monster.id === monsterId
    })

    const team2Monster = this.props.team2Roster.find( monster => {
      return monster.id === monsterId
    })

    if (team1Monster) {
      return team1Monster
    } else if (team2Monster) {
      return team2Monster
    }
  }

  setInitialStage = () => {
    this.setState({ stage: 'checkGameState' })
  }

  advanceStage = () => {
    const stage = this.stageProg[this.state.stage]
    this.setState({ stage })
  }

  checkGameStage = () => {
    if (this.state.stage === 'checkGameState') {
      this.advanceStage()
    }

    if (this.state.stage === 'rollTurn') {
      // check if both players have rolled
      if (this.state.p1Turn && this.state.p2Turn) {
        let currentTurn = 0
        if (this.state.p1Turn > this.state.p2Turn) {
          currentTurn = 1
        } else if (this.state.p1Turn < this.state.p2Turn) {
          currentTurn = 2
        } else if (this.state.p1Turn === this.state.p2Turn) {
          this.setState({ p1Turn: 0, p2Turn: 0 })
          return
        }

        this.setState({ currentTurn })
        this.advanceStage()
      }
    }

    if (this.state.stage === 'playerEquivalence') {
      // If player 2 hasn't gone yet...
      if (this.state.currentTurn === 1 && this.state.p2Move === 0) {
        this.setState({ currentTurn: 2, stage: 'rollMove' })
      }

      // If player 1 hasn't gone yet...
      if (this.state.currentTurn === 2 && this.state.p1Move === 0) {
        this.setState({ currentTurn: 1, stage: 'rollMove' })
      }

      if (this.state.p1Move && this.state.p2Move) {
        this.advanceStage()
      }
    }

    if (this.state.stage === 'resetTurnValues') {
      let p1Turn, p2Turn, p1Move, p2Move, p1Attack, p2Attack, currentTurn
      p1Turn = p2Turn = p1Move = p2Move = p1Attack = p2Attack = currentTurn = 0
      this.setState({
        p1Turn, p2Turn, p1Move, p2Move, p1Attack, p2Attack, currentTurn
      }, () => this.advanceStage())
    }
  }

  diceValueMultiplexer = (playerId, diceValue) => {
    if (this.state.stage === 'rollTurn') {
      if (playerId === 1) {
        this.setState({ p1Turn: diceValue })
      } else if (playerId === 2) {
        this.setState({ p2Turn: diceValue })
      }
    } else if (this.state.stage === 'rollMove') {
      if (playerId === 1 && this.state.currentTurn === 1) {
        this.setState({ p1Move: diceValue }, () => {
          this.advanceStage()
        })
      } else if (playerId === 2 && this.state.currentTurn === 2) {
        this.setState({ p2Move: diceValue }, () => {
          this.advanceStage()
        })
      }
    } else if (this.state.stage === 'rollAttack') {
      if (playerId === 1 && this.state.currentTurn === 1) {
        this.setState({ p1Attack: diceValue }, () => {
          this.advanceStage()
        })
      } else if (playerId === 2 && this.state.currentTurn === 2) {
        this.setState({ p2Attack: diceValue }, () => {
          this.advanceStage()
        })
      }
    }
  }

  setStage = stage => {
    this.setState({ stage })
  }

  render() {
    this.checkGameStage()

    return (
      <div className="App">
        <div className="playArea">
          <PlayerDiceContainer 
            diceValueMultiplexer={this.diceValueMultiplexer}
            currentTurn={{turn: this.state.p1Turn, move: this.state.p1Move, attack: this.state.p1Attack}}
            playerId={1}
          />
          <div className="gameContainer">
            <GameBoard
              monsters={this.props.monsters}
              attacks={this.props.attacks}
              findMonster={this.props.findMonster}
              team1={this.props.team1}
              team2={this.props.team2}
              team1Roster={this.props.team1Roster}
              team2Roster={this.props.team2Roster}
              findTeamMonsters={this.props.findTeamMonsters}
              hover={this.renderHoverCard}
              unhover={this.unrenderHoverCard}
              setInitialStage={this.setInitialStage}
              stage={this.state.stage}
              advanceStage={this.advanceStage}
              p1Turn={this.state.p1Turn}
              p1Move={this.state.p1Move}
              p1Attack={this.state.p1Attack}
              p2Turn={this.state.p2Turn}
              p2Move={this.state.p2Move}
              p2Attack={this.state.p2Attack}
              currentTurn={this.state.currentTurn}
              setStage={this.setStage}
              setWin={this.props.setWin}
            />
          </div>
          <PlayerDiceContainer 
            diceValueMultiplexer={this.diceValueMultiplexer}
            currentTurn={{turn: this.state.p2Turn, move: this.state.p2Move, attack: this.state.p2Attack}}
            playerId={2}
          />
        </div>
        <br />
        <div className="hoverCard">
          <h2>{this.getBannerText()}</h2>
        </div>
      </div>
    )
  }
}


export default GameInstance
