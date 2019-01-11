import React from "react";
class HogCard extends React.Component {
  constructor() {
    super();
    this.state = { clicked: false };
  }
  clickHandler = () => {
    let value = this.state.clicked;
    this.setState({ clicked: !value });
  };
  render() {
    var show = {
      display: this.state.clicked ? "block" : "none"
    };

    // var hidden = {
    // 	display: this.state.clicked ? "none" : "block"
    // }

    return (
      <div class="ui link cards">
        <h3>{this.props.hog.name}</h3>
        <img
          onClick={this.clickHandler}
          src={require(`../hog-imgs/${this.props.hog.name
            .toLowerCase()
            .replace(/\s/g, "_")}.jpg`)}
          alt=""
        />
        <p style={show}>{this.props.hog.specialty}</p>
        <p style={show}>Greade: {this.props.hog.greased ? "yes" : "no"}</p>
        <p style={show}>Weight</p>
        <p style={show}>Highest medal achieved</p>
      </div>
    );
  }
}
export default HogCard;
