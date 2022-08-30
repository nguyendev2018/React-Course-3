import React, { Component } from "react";

class LifeCy extends Component {
  state = {
    number: 1,
  };
  getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return null;
  }
  render() {
    return <div></div>;
  }
}

export default LifeCy;
