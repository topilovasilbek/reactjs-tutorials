import React, { Component } from "react";
import "./tutorial.css";
// import Child from "./child";

class Tutorial extends Component {
  constructor() {
    super();
    this.state = {
      count: 5,
      title: "Counter",
    };
  }

  render() {
    const add = () => {
      this.setState({ count: this.state.count + 1 });
    };

    const subtract = () => {
      this.setState({ count: this.state.count - 1 });
    };

    const { title, count } = this.state;
    return (
      <div>
        <h2>{title}</h2>
        Count - {count}
        <div>
          <button onClick={add}>+</button>
          <button onClick={subtract}>-</button>
        </div>
        {/* <Child name={"Asilbek"} surname={"Topilov"} /> */}
      </div>
    );
  }
}

export default Tutorial;
