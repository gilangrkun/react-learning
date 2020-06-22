import React, { Component, Fragment } from "react";

// react-component / class

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "ansdkjk",
      id: "298348",
    };
  }
  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.id}</p>
      </div>
    );
  }
}

export default Test;
