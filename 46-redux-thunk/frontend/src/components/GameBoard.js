import React, { Component } from 'react';
import HexTile from './HexTile';
import possibleTiles from '../movement';

class GameBoard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tileCount: 57,
      id: 0,
      groundTiles: [
        'https://i.imgur.com/bq89X0b.jpg',
        'https://i.imgur.com/ZcMpVxD.jpg',
        'https://i.imgur.com/Dq9uhFl.jpg',
        'https://i.imgur.com/fwcDwSX.jpg',
        'https://i.imgur.com/wgV8O4l.jpg',
        'https://i.imgur.com/PiSnWKy.jpg',
        'https://i.imgur.com/wWjYvwS.jpg',
        'https://i.imgur.com/C3TCpyP.jpg',
        'https://i.imgur.com/S0fkCJK.jpg',
        'https://i.imgur.com/g9uf9XC.jpg',
        'https://i.imgur.com/VSjayqA.jpg',
        'https://i.imgur.com/zIh6qT1.jpg',
        'https://i.imgur.com/nkCPkUZ.jpg',
        'https://i.imgur.com/Npd4jL6.jpg',
        'https://i.imgur.com/kFA8UI9.jpg',
        'https://i.imgur.com/5G0oiK1.jpg',
        'https://i.imgur.com/FFPv9ig.jpg',
        'https://i.imgur.com/gGEBhhd.jpg',
        'https://i.imgur.com/JsDCJFb.jpg',
      ],
      tileBg: [],
      selectedMonster: 0,
      fromTile: 0,
      toTile: 0,
      gameStarted: false,
      team1Roster: this.props.team1Roster,
      team2Roster: this.props.team2Roster,
    }
  }

  startPositions = [
    [1, 11, 20, 30, 39, 49],
    [10, 19, 29, 38, 48, 57]
  ]

  selectMonster = (selectedMonster, fromTile) => {
    if (selectedMonster === 0) {
      return
    }

    const monster = this.findMonsterInTeams(selectedMonster)
    if (monster.team === this.props.currentTurn) {
      this.setState({ selectedMonster, fromTile })
    }
  }

  findMonsterInTeams = monsterId => {
    const team1Monster = this.state.team1Roster.find( monster => {
      return monster.id === monsterId
    })

    const team2Monster = this.state.team2Roster.find( monster => {
      return monster.id === monsterId
    })

    if (team1Monster) {
      return team1Monster
    } else if (team2Monster) {
      return team2Monster
    }
  }

  findPossibleMoves = (monster, originTile) => {
    const oneTile = possibleTiles[originTile - 1][originTile][0][1]
    const twoTiles = possibleTiles[originTile - 1][originTile][1][2]
    const threeTiles = possibleTiles[originTile - 1][originTile][2][3]

    if (monster.evo_level === 1) {
      return oneTile.concat(twoTiles).concat(threeTiles)
    }

    const roll = this.props.currentTurn === 1 && this.props.p1Move ? this.props.p1Move : this.props.currentTurn === 2 ? this.props.p2Move : null

    if (monster.evo_level === 2 && roll > 3) {
      return oneTile.concat(twoTiles).concat(threeTiles)
    } else if (monster.evo_level === 2 && roll < 4) {
      return oneTile.concat(twoTiles)
    }

    if ((monster.evo_level === 3 || monster.evo_level === 6) && roll > 3) {
      return oneTile.concat(twoTiles)
    } else if ((monster.evo_level === 3 || monster.evo_level === 6) && roll < 4) {
      return oneTile
    }
  }

  onCurrentTeam = monsterId => {
    let team = []
    if (this.props.currentTurn === 1) {
      team = this.state.team1Roster
    } else if (this.props.currentTurn === 2) {
      team = this.state.team2Roster
    }

    const monster = team.find( monster => {
      return monster.id === monsterId
    })

    return monster ? true : false
  }

  attackValid = (attackingId, targetId) => {
    const attacking = this.findMonsterInTeams(attackingId)
    const target = this.findMonsterInTeams(targetId)

    if (!this.withinOneTile(attacking.tile, target.tile)) {
      return false
    }

    if (this.props.stage !== 'attack') {
      console.log("Not in attack phase.")
      return false
    }

    return true
  }

  getCurrentPlayerStats = () => {
    const stats = {}
    if (this.props.currentTurn === 1) {
      stats.move = this.props.p1Move
      stats.turn = this.props.p1Turn
      stats.attack = this.props.p1Attack
    } else if (this.props.currentTurn === 2) {
      stats.turn = this.props.p2Turn
      stats.move = this.props.p2Move
      stats.attack = this.props.p2Attack
    }
    return stats
  }

  getAttackMultiplier = (attackRoll, monsterPower) => {
    if (attackRoll === 1) {
      return Math.floor(monsterPower * 0.05)
    } else if (attackRoll > 1 && attackRoll < 4) {
      return Math.floor(monsterPower * 0.15)
    } else if (attackRoll > 3 && attackRoll < 6) {
      return Math.floor(monsterPower * 0.25)
    } else if (attackRoll === 6) {
      return Math.floor(monsterPower * 0.6)
    }
  }

  executeAttack = (attackingId, targetId) => {
    const attacking = this.findMonsterInTeams(attackingId)
    const target = this.findMonsterInTeams(targetId)

    const stats = this.getCurrentPlayerStats()
    console.log(stats)
    const damage = this.getAttackMultiplier(stats.attack, attacking.power)

    console.log(damage)

    target.hp -= damage

    let team = []
    let rosterName = ''
    if (target.team === 1) {
      team = this.state.team1Roster
      rosterName = 'team1Roster'
    } else if (target.team === 2) {
      team = this.state.team2Roster
      rosterName = 'team2Roster'
    }

    team = team.map( monster => {
      return monster.id === target.id ? target : monster
    })

    const obj = {rosterName: team}

    this.setState(obj)
  }

  cleanBoard = () => {
    const dead = []
    this.state.team1Roster.forEach( monster => {
      if (monster.hp <= 0) {
        dead.push(monster.id)
      }
    })

    this.state.team2Roster.forEach( monster => {
      if (monster.hp <= 0) {
        dead.push(monster.id)
      }
    })

    const team1Roster = this.state.team1Roster.filter( monster => {
      return !dead.includes(monster.id)
    })

    const team2Roster = this.state.team2Roster.filter( monster => {
      return !dead.includes(monster.id)
    })

    this.setState({ team1Roster, team2Roster })
  }

  decideClickAction = (tileId, monsterId) => {
    // If there's a selected monster already, and I click on
    // another monster on my team, switch the selection to
    // the new one I clicked on.
    if (monsterId && this.state.selectedMonster && this.onCurrentTeam(monsterId)) {
      this.selectMonster(monsterId, tileId)
    }

    // If there's a selected monster already, attack the one I clicked on.
    if (monsterId && this.state.selectedMonster && !this.onCurrentTeam(monsterId)) {
      const valid = this.attackValid(this.state.selectedMonster, monsterId)
      if (valid) {
        this.executeAttack(this.state.selectedMonster, monsterId)
        this.props.advanceStage()
      }
    }

    // If there's no selected monster, select it.
    if (!this.state.selectedMonster) {
      this.selectMonster(monsterId ? monsterId : 0, tileId)
    }

    // If there's a monster selected and I clicked on a tile that doesn't
    //    have a monster, move it to that tile.
    if (this.state.selectedMonster && !monsterId) {
      this.moveMonster(tileId)
    }
  }

  withinMoveRange = toTile => {
    const fromTile = this.state.fromTile
    const monster = this.findMonsterInTeams(this.state.selectedMonster)
    const possibleTiles = this.findPossibleMoves(monster, fromTile)
    return possibleTiles.includes(toTile)
  }

  moveMonster = toTile => {
    if (this.props.stage !== 'move' || !this.withinMoveRange(toTile)) {
      return
    }

    const newMonster = this.findMonsterInTeams(this.state.selectedMonster)
    newMonster.tile = toTile

    let team = []
    let stateName = ''
    if (newMonster.team === 1) {
      team = this.state.team1Roster
      stateName = 'team1Roster'
    } else {
      team = this.state.team2Roster
      stateName = 'team2Roster'
    }

    team = team.map( monster => {
      if (monster.id === newMonster.id) {
        return newMonster
      } else {
        return monster
      }
    })

    let newState = {}
    newState[stateName] = team

    this.setState( newState , () => {
      this.setState({ fromTile: 0, selectedMonster: 0})
    })

    this.props.advanceStage()
  }

  monsterOnTile = tileId => {
    if (!this.state.team1Roster) { return 0 }

    const team1Monster = this.state.team1Roster.find( monster => {
      return monster.tile === tileId
    })

    const team2Monster = this.state.team2Roster.find( monster => {
      return monster.tile === tileId
    })

    if (team1Monster) {
      return team1Monster
    } else if (team2Monster) {
      return team2Monster
    }

    return 0
  }

  renderBoard = () => {
    const hexes = []
    for (let i = 1; i < this.state.tileCount + 1; i++) {
      const monsterHere = this.monsterOnTile(i)
      hexes.push(
        <HexTile
          key={i}
          id={i}
          image={this.state.tileBg[i]}
          monsterId={ this.props.monsters && monsterHere ? monsterHere.id : null }
          direction={ monsterHere && monsterHere.team === 1 ? 'right' : 'left' }
          selectMonster={this.selectMonster}
          selectedMonster={this.state.selectedMonster}
          findMonster={this.props.findMonster}
          moveMonster={this.moveMonster}
          hover={this.props.hover}
          unhover={this.props.unhover}
          decideClickAction={this.decideClickAction}
        />
      )
    }
    return hexes
  }

  startGame() {
    const monstersWithPositions1 = []
    for (let i = 0; i < this.state.team1Roster.length; i++) {
      const monster = this.state.team1Roster[i]
      monster.tile = this.startPositions[0][i]
      monster.team = 1
      monstersWithPositions1.push(monster)
    }

    const monstersWithPositions2 = []
    for (let i = 0; i < this.state.team2Roster.length; i++) {
      const monster = this.state.team2Roster[i]
      monster.tile = this.startPositions[1][i]
      monster.team = 2
      monstersWithPositions2.push(monster)
    }

    this.setState({
      gameStarted: true,
      team1Roster: monstersWithPositions1,
      team2Roster: monstersWithPositions2,
    })

    this.props.setInitialStage()
  }

  withinOneTile = (originTile, targetTile) => {
    const adjacentTiles = possibleTiles[originTile - 1][originTile][0][1]
    return adjacentTiles.includes(targetTile) ? targetTile : 0
  }

  getAllSurroundingEnemies = teamId => {
    let team, opposing = []

    if (teamId === 1) {
      team = this.state.team1Roster
      opposing = this.state.team2Roster
    } else {
      team = this.state.team2Roster
      opposing = this.state.team1Roster
    }

    let enemyTiles = []
    team.forEach( monster => {
      opposing.forEach( enemy => {
        if (this.withinOneTile(monster.tile, enemy.tile)) { enemyTiles.push(enemy) }
      })
    })

    enemyTiles = enemyTiles.filter( tileId => {
      return tileId !== 0
    })

    return enemyTiles
  }

  attackOptionsExist = () => {
    const player = this.state.currentTurn === 1 ? 1 : this.state.currentTurn === 2 ? 2 : null
    const enemyTiles = this.getAllSurroundingEnemies(player)
    if (enemyTiles.length > 0) {
      return true
    }
    return false
  }

  checkWin = () => {
    if (this.state.team1Roster.length === 0 || this.state.team2Roster.length === 0) {
      const winner = this.state.team1Roster.length === 0 ? 2 : 1
      this.props.setWin(winner)
      return true
    }

    return false
  }

  randomizeTiles = () => {
    const tileBg = {}
    for (let i = 1; i <= 57; i++) {
      tileBg[i] = this.state.groundTiles[Math.floor(Math.random() * this.state.groundTiles.length)]
    }
    this.setState({ tileBg })
  }

  componentDidMount() {
    this.randomizeTiles()
  }

  render() {
    if (this.state.team1Roster && !this.state.gameStarted) {
      this.startGame()
    }

    if (this.props.stage === 'attack' && !this.attackOptionsExist()) {
      this.props.advanceStage()
    }

    if (this.props.stage === 'cleanBoard') {
      this.cleanBoard()
      this.props.advanceStage()
    }

    if (this.props.stage === 'checkWin') {
      if (this.checkWin()) {
        console.log('PLAYER WINS')
        return null
      }

      this.props.advanceStage()
    }

    return (
      <div className="board">
        <ul id="hexGrid">
            {this.renderBoard()}
        </ul>
      </div>
    )
  }
}

export default GameBoard;
