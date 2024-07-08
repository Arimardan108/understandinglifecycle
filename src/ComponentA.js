import React from "react";
class ComponentA extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "ComponentA",
    };
    console.log("ComponentA Constructor");

    this.setState({
      name: "CA",
    });
  }
  lkfndscfn;
  static getDerivedStateFromProps() {
    console.log("ComponentA getDriveredStateByProps");
    return null;
  }
  componentDidMount() {
    console.log("ComponntA ComponentDidMount");
  }
  render() {
    console.log("ComponentA render");
    return (
      <>
        <h1>{this.state.name}</h1>
      </>
    );
  }
}
export default ComponentA;
