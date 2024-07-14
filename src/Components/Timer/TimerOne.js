import { prettyDOM } from "@testing-library/react";
import React from "react";
export default class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("TimerOne Constructer");
  }
  static getDrivedStateFromProps() {
    console.log("TimerOne getDrivedStateFromProps");
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  handleIncrease = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    console.log("TimerOne render");
    return (
      <>
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleIncrease}>Increase</button>
      </>
    );
  }
  componentDidMount() {
    console.log("TimerOne componentDidMount");
    console.log("__________________________");
  }
  getSnapshotBeforeUpdate() {
    console.log("TimeOne getSanpshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("TimerOne componentDidUpdate");
    console.log("___________________________");
  }
}
