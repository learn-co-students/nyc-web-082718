import React from "react";

const convertHogNameToImgFileName = hogName => {
  return `${hogName
    .toLowerCase()
    .split(" ")
    .join("_")}.jpg`;
};

class Hog extends React.Component {
  state = {
    displayDetails: true
  };

  toggleDetails = () => {
    this.setState(currentState => ({
      displayDetails: !currentState.displayDetails
    }));
  };

  render() {
    const { name, weight, specialty, greased } = this.props.hogData;
    const fileName = convertHogNameToImgFileName(name);
    const imgSrc = require(`../hog-imgs/${fileName}`);
    console.log(imgSrc);

    const details = (
      <div>
        <h2>Weight {weight}</h2>
        <h2>Specialty {specialty}</h2>
        <h2>Greased {greased ? "YES" : "NO"}</h2>
      </div>
    );

    return (
      <div
        onClick={this.toggleDetails}
        className="ui eight wide column pigTile"
      >
        <h1>{name}</h1>
        <img className="ui image" src={imgSrc} />
        {this.state.displayDetails ? details : null}
      </div>
    );
  }
}

export default Hog;
