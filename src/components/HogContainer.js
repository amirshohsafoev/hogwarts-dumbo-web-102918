import React from "react";
import HogCard from "./HogCard";
class HogContainer extends React.Component {
  createPigs() {
    return this.props.pigs.map(pig => {
      return <HogCard key={pig.name} hog={pig} />;
    });
  }
  render() {
    return (
      <div>
        {this.createPigs()}
        <p className="pigTile" />
      </div>
    );
  }
}
export default HogContainer;
