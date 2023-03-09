import { Component } from "react";

class Class extends Component {
  constructor() {
    super();
    this.state = {
      name: "Asilbek",
      title: null,
    };
    console.log("I'm on the constructor");
  }

  componentDidMount() {
    console.log("I'm on the component did mount");
    this.setState({ ...this.state, title: "Hey" });
  }

  static getDerivedStateFromProps({ props }, state) {
    console.log("I'm on the get derived state from props");
    return { title: props?.title };
  }

  shouldComponentUpdate() {
    return true;
  }

  /* getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    this.setState(prevState);
  } */

  componentWillUnmount() {
    console.log("I'm on the component will un mount");
  }

  componentDidUpdate() {
    console.log("I'm on the component did update");
  }

  render() {
    console.log("I'm on the render");
    return <div>Tutorial {this.state.title}</div>;
  }
}

export default Class;
