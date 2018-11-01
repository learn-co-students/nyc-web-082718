import React, { Component } from "react";

export class CountWords extends React.Component {
  render() {
    //debugger;
    const numberOfWords = this.props.data.split(" ").filter(word => !!word)
      .length;
    return (
      <>
        <h1 onClick={this.props.onClick}>
          This sentence includes {numberOfWords} words
          {this.props.children}
        </h1>
      </>
    );
  }
}

export const CountWordsExceptPizza = props => {
  const numberOfWords = props.data
    .split(" ")
    .filter(word => !!word)
    .filter(word => word !== "pizza").length;
  return (
    <h1>This sentence includes {numberOfWords} words (that are not Pizza)</h1>
  );
};

let saveReferenceToEvent = null;



  myFunctionalComponent() {
    return (
      <>
        {/* <input
          onChange={this.handleInputChanges}
          type="text"
          value={this.state.words}
        />
        <CountWords onClick={this.addPizzas} data={this.state.words}>
          <CountWordsExceptPizza data={this.state.words} />
        </CountWords> */}
        <h1 onClick={props.eventHandler}>Explore events</h1>
      </>
    );
  }

