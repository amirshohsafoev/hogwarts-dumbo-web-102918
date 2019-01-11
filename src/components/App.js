import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";

class App extends Component {
  state = {
    hogs: hogs,
    filterOn: false,
    sorted: false
  };
  toggleSort = () => {
    let value = this.state.sorted;
    this.setState({ sorted: !value });
  };

  toggleFilter = () => {
    let value = this.state.filterOn;
    this.setState({ filterOn: !value });
  };
  transformHogsArray = () => {
    let hogList = [...this.state.hogs];
    if (this.state.filterOn) {
      hogList = hogList.filter(hog => hog.greased);
    }
    if (this.state.sorted) {
      hogList = hogList.sort(function(hogA, hogB) {
        if (hogA.name > hogB.name) {
          return 1;
        } else {
          return -1;
        }
      });
    }
    return hogList;
  };
  render() {
    return (
      <div className="App">
        <Nav />
        <button onClick={this.toggleFilter}>Show Greasy Only</button>
        <button onClick={this.toggleSort}>Sort by name</button>
        <HogContainer
          className="ui grid container"
          pigs={this.transformHogsArray()}
        />
      </div>
    );
  }
}

export default App;
