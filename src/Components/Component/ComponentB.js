import React from "react";
class ComponentB extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "ComponentB",
    };
    console.log("ComponentB Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("ComponentB getDriveredStateByProps");
    return null;
  }
  componentDidMount() {
    console.log("ComponntA ComponentDidMount");
  }
  render() {
    console.log("ComponentB render");
    // this.setState({
    //   name: "CA",
    // });

    return (
      <>
        <h2>{this.state.name}</h2>
      </>
    );
  }
}
export default ComponentB;
