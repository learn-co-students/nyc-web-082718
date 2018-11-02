import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import Hogs from "./Hogs";

class App extends Component {
  state = {
    filterBy: "name",
    greased: "no"
  };

  handleFilters = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="App">
        <Nav
          filterBy={this.state.filterBy}
          greased={this.state.greased}
          handleFilters={this.handleFilters}
        />
        <Hogs filterBy={this.state.filterBy} greased={this.state.greased} />
      </div>
    );
  }
}

export default App;
