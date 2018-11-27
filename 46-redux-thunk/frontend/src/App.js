import React, { Component, Fragment } from 'react';
import './App.css';
import GameInstance from './components/GameInstance'
import TeamSelector from './components/TeamSelector'
import GameOver from './components/GameOver'
import BackgroundVideo from './components/BackgroundVideo'
import { connect } from 'react-redux';
import { updateMonsters, fetchMonsters } from './actions';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      panel: 'gameInstance',
      // monsters: null,
      attacks: null,
      teams: null,
      team1: null,
      team2: null,
      team1Roster: null,
      team2Roster: null,
      assignments: [],
      gameWonBy: null
    }
  }

  monstersURL = 'http://localhost:4000/monsters'
  attacksURL = 'http://localhost:4000/attacks'
  teamsURL = 'http://localhost:4000/teams'
  teamAssignmentURL = 'http://localhost:4000/team_assignments'

  componentDidMount() {
    this.props.fetchMonsters();
    // this.props.fetchAttacks();
    // this.props.fetchTeams();
    // this.props.fetchAssignments();

    // fetch(this.monstersURL)
    // .then(r=>r.json())
    // .then(monsters=> {
    //   this.props.updateMonsters(monsters)
    // })

    fetch(this.attacksURL)
    .then(r=>r.json())
    .then(attacks=>this.setState({ attacks }))

    fetch(this.teamsURL)
    .then(r=>r.json())
    .then(teams=>this.setState({ teams }))

    fetch(this.teamAssignmentURL)
    .then(r=>r.json())
    .then(assignments=>this.setState({ assignments }))
  }

  findMonster = monsterId => {
    return this.props.monsters.find( monster => {
      return monster.id === monsterId
    })
  }

  changePanel = panel => {
    this.setState({ panel })
  }

  findTeamMonsters = teamId => {
    if (!this.state.teams) {
      return []
    }
    const team = this.state.teams.find( team => {
      return team.id === teamId
    })

    return this.state.assignments.filter( assignment => assignment.team_id === team.id).map( assignment => {
      return this.props.monsters.find( monster => monster.id === assignment.monster_id )
    })
  }

  selectTeam = teamId => {
    if (this.state.team1 === null) {
      this.setState({ team1: teamId, team1Roster: this.findTeamMonsters(teamId) })

    } else if (this.state.team2 === null) {
      this.setState({ team2: teamId, team2Roster: this.findTeamMonsters(teamId) }, () => {
        this.changePanel('gameInstance')
      })
    }
  }

  setWin = (playerId) => {
    this.setState({ gameWonBy: playerId })
  }

  wipeGame = () => {
    this.setState({
      panel: 'gameInstance',
      team1: null,
      team2: null,
      team1Roster: null,
      team2Roster: null,
      gameWonBy: null
    })
  }

  render() {
    console.log(this.props, 'yay!');
    const showGame = this.state.team1 && this.state.team2
    return (
      <Fragment>
      <div className="fullscreen-bg">
        <BackgroundVideo />
      </div>
      <a
        href="https://github.com/astrosquid/monster-board-game-react-frontend"
      >
        <img
          className="logo"
          src="https://i.imgur.com/IIxo52q.png"
          alt="logo"
        />
      </a>
      {this.state.gameWonBy ?
        <GameOver
          wonBy={this.state.gameWonBy}
          selectTeam={this.selectTeam}
          wipeGame={this.wipeGame}
        />
      : showGame ?
        <GameInstance
          monsters={this.props.monsters}
          attacks={this.state.attacks}
          findMonster={this.findMonster}
          team1={this.state.team1}
          team2={this.state.team2}
          team1Roster={this.state.team1Roster}
          team2Roster={this.state.team2Roster}
          findTeamMonsters={this.findTeamMonsters}
          setWin={this.setWin}
        />
      :
        <TeamSelector
          monsters={this.props.monsters}
          attacks={this.state.attacks}
          teams={this.state.teams}
          assignments={this.state.assignments}
          changePanel={this.changePanel}
          findTeamMonsters={this.findTeamMonsters}
          team1={this.state.team1}
          team2={this.state.team2}
          selectTeam={this.selectTeam}
        />
      }
      </Fragment>
    );
  }
}

// not sure? what is connect?
// connect is a higher order function that returns a higher order component

// map state to props => will map parts of the state to the props of this component
function mapStateToProps(state) {
  return {
    monsters: state.monsters
  }
}

// map functions to your props
function mapDispatchToProps(dispatch) {
  return {
    updateMonsters: (monsters) => dispatch(updateMonsters(monsters)),
    // thunk is a lot of abstraction!
    // we need to go deeper!
    // fetchMonsters: () => {
    //   fetch('http://localhost:4000/monsters')
    //   .then(r=>r.json())
    //   .then(monsters=> {
    //     dispatch(updateMonsters(monsters))
    //   })
    // }
    fetchMonsters: () => dispatch(fetchMonsters())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
