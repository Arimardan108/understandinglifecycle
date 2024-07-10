import React from "react";
import ComponentB from "./ComponentB";
class ComponentA extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "ComponentA",
    };
    console.log("ComponentA Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("ComponentA getDriveredStateByProps");
    return null;
  }
  componentDidMount() {
    console.log("ComponntA ComponentDidMount");
  }
  render() {
    console.log("ComponentA render");
    // this.setState({
    //   name: "CA",
    // });

    return (
      <>
        <h1>{this.state.name}</h1>
        <ComponentB />
      </>
    );
  }
}
export default ComponentA;
