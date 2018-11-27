import React, { Fragment } from 'react'

class ViewButtons extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="changeScreens">
          <button
            onClick={() => this.props.changePanel('teamSelect')}
          >
            Team Selection
          </button>
          <button
            onClick={() => this.props.changePanel('gameInstance')}
          >
            Game Instance
          </button>
        </div>
      </Fragment>
    )
  }
}

export default ViewButtons
