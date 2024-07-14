import React from "react";
class Timer extends React.Component() {
  constructor() {
    super();
    console.log("TimerOne Constructer");
  }
  static getDrivedStateFromProps() {
    console.log("TimerOne getDrivedStateFromProps");
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  render() {
    console.log("TimerOne render");
    return <h1>Timer</h1>;
  }
  componentDidMount() {
    console.log("TimerOne componentDidMount");
  }
  getSnapshotBeforeUpdate() {
    console.log("TimeOne getSanpshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("TimerOne componentDidUpdate");
  }
}
