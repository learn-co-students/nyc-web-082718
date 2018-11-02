import React from "react";
import Data from "../porkers_data";
import Hog from "./Hog";

const sortByName = hogsCollection =>
  hogsCollection.sort((a, b) => a.name.localeCompare(b.name));

const sortByWeight = hogsCollection =>
  hogsCollection.sort((a, b) => {
    const { weight: aWeight } = a;
    const { weight: bWeight } = b;
    if (aWeight > bWeight) {
      return 1;
    } else if (aWeight < bWeight) {
      return -1;
    } else {
      return 0;
    }
  });

const makeDataKeysMoreSane = insaneData => {
  return insaneData.map(e => {
    const {
      name,
      specialty,
      greased,
      "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water": weight,
      "highest medal achieved": achieved
    } = e;
    return {
      name,
      specialty,
      greased,
      weight,
      achieved
    };
  });
};

class Hogs extends React.Component {
  state = {
    hogs: makeDataKeysMoreSane(Data)
  };

  applyGreaseFilter = hogsCollection => {
    console.log(this);
    const saveThis = this;

    return hogsCollection.filter(hogObj => {
      const {
        props: { greased }
      } = this;
      const { greased: greasedCondition } = hogObj;

      switch (greased) {
        case "yes":
          return greasedCondition;
        case "no":
          return !greasedCondition;
        case "all":
          return true;
        default:
          // we should always have a default case
          true;
      }
    });
  };

  hogsToDisplay = () => {
    const {
      props: { filterBy }
    } = this;

    let result = this.state.hogs;
    if (filterBy === "name") {
      result = sortByName(this.state.hogs);
    } else if (filterBy === "weight") {
      result = sortByWeight(this.state.hogs);
    }

    return this.applyGreaseFilter(result);
  };
  render() {
    return (
      <div className="ui grid container">
        {this.hogsToDisplay().map(hogObj => (
          <Hog key={hogObj.name} hogData={hogObj} />
        ))}
      </div>
    );
  }
}

export default Hogs;
