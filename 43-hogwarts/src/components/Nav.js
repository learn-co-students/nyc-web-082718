import piggy from "../porco.png";
import React from "react";

const Nav = props => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
          <img src={piggy} className="App-logo" alt="piggy" />
        </a>
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <div>
        Filter By: <br />
        <select
          name="filterBy"
          onChange={props.handleFilters}
          defaultValue={props.filterBy}
        >
          <option value="name">name</option>
          <option value="weight">weight</option>
        </select>
        <br />
        Greased By: <br />
        <select
          name="greased"
          onChange={props.handleFilters}
          defaultValue={props.greased}
        >
          <option value="yes">yes</option>
          <option value="no">no</option>
          <option value="all">all</option>
        </select>
      </div>
    </div>
  );
};

export default Nav;
