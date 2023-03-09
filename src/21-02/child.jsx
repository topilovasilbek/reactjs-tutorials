import React, { Component } from "react";

class Child extends Component {
  render() {
    const { name, surname } = this.props;
    return (
      <div>
        <div>{name}</div>
        <div>{surname}</div>
      </div>
    );
  }
}

export default Child;
