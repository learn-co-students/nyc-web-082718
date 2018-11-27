import React from 'react'

class TeamSelector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      team1: null,
      team2: null,
    }
  }

  capitalizeName = (monsterName) => {
    return monsterName.charAt(0).toUpperCase() + monsterName.slice(1)
  }

  makeTeamLists = () => {
    if (!this.props.monsters || !this.props.teams) { return null }

    return this.props.teams.map( team => {
      const monsters = this.props.findTeamMonsters(team.id)
      const listItems = monsters.map( monster => {
        return (
          <div className="teamCard" key={monster.name}>
            <img src={monster.sprite_front} alt="" />
            <h2>{this.capitalizeName(monster.name)}</h2>
          </div>
        )
      })

      return (
        <div key={team.name}>
          <div className="cardHeader">
          </div>
          <div className="card" onClick={() => this.props.selectTeam(team.id)}>
            <h2>{team.name}</h2>
            {listItems}
            <br />
          </div>
          <div className="cardHeader">
          </div>
        </div>
      )
    })
  }

  render() {
    let header = ''
    if (this.props.team1 === null) {
      header = "Player 1"
    } else {
      header = "Player 2"
    }

    return (
      <React.Fragment>
        <div>
          <br />
          <div className="selectScreenHeader">
            <h1>{header}, Select Your Team!</h1>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="content">
            {this.makeTeamLists()}
          </div>
          <br />
        </div>
      </React.Fragment>
    )
  }
}

export default TeamSelector
