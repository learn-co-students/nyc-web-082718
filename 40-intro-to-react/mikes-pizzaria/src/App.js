import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Single Page Application - never goes back to the backend
// Rails is for APIS

// Different types of pizzas
// Look at the pizzas
// Buy a pizza
// Create your own pizza

// Component Hierarchy
// App
//  NavigationMenu
//  OrderMenu
//  Promotions
//    Promotion

// JSX is hiding JavaScript such that it looks like HTML
// all attributes in JSX are camelCased
// className vs class
// htmlFor vs for
// EXCEPT FOR:
// data-attribtues
// aria-attributes

// img src={} => {logo} => expressions are evaluated
// Babel => magic tooling things that's provided to you


// React Under the Hood
// node, npm, babel, webpack => create-react-app, bundling, minification
class App extends Component {
  ifFunction() {
    if (true) {
      return "true";
    } else {
      return "false";
    }
  }

  render() {
    console.log(this.ifFunction);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.ifFunction()}
          </a>
        </header>
      </div>
    );
  }
}

// export our component so we can import it and use it elsewhere
export default App;
