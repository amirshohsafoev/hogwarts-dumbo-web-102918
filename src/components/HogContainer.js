import React from "react";
import HogCard from "./HogCard";
class HogContainer extends React.Component {
  createPigs() {
    return this.props.pigs.map(pig => {
      return <HogCard className="pigTile" key={pig.name} hog={pig} />;
    });
  }
  render() {
    return <div>{this.createPigs()}</div>;
  }
}
export default HogContainer;
