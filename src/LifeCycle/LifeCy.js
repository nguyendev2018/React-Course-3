import React, { Component } from "react";

class LifeCy extends Component {
  state = {
    number: 1,
  };
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount");
    return null;
  }
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button
          onClick={() => {
            this.setState({ number: this.state.number + 1 });
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

export default LifeCy;
