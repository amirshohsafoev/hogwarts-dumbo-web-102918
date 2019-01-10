import React from "react";
class HogCard extends React.Component {
  constructor() {
    super();
    this.state = { clicked: false };
  }
  clickHandler = () => {
    let value = this.state.clicked;
    this.setState({ clicked: !value });
    console.log("clicked");
  };
  render() {
    console.log(this.state.clicked);
    return (
      <div>
        <h3>{this.props.hog.name}</h3>
        <img
          onClick={this.clickHandler}
          src={require(`../hog-imgs/${this.props.hog.name
            .toLowerCase()
            .replace(/\s/g, "_")}.jpg`)}
          alt=""
        />
        <p>{this.props.hog.specialty}</p>
        <p>Greade: {this.props.hog.greased ? "yes" : "no"}</p>
        <p>Weight</p>
        <p>Highest medal achieved</p>
      </div>
    );
  }
}
export default HogCard;
