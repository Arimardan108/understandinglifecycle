import { prettyDOM } from "@testing-library/react";
import React from "react";
export default class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0,
    };
    this.timer = null;
    console.log("TimerOne Constructer");
  }
  static getDrivedStateFromProps() {
    console.log("TimerOne getDrivedStateFromProps");
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps);
    console.log(nextState);
    return true;
  }
  render() {
    console.log("TimerOne render");
    return (
      <>
        <h1>
          Time Spend:
          {new Date(this.state.time * 1000).toISOString().slice(11, 19)}
        </h1>
      </>
    );
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("TimeOne getSanpshotBeforeUpdate");
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("TimerOne componentDidUpdate");
    console.log("___________________________");

    if (prevProps.timerOn !== this.props.timerOn) {
      if (this.props.timerOn) {
        this.timer = setInterval(() => {
          this.setState((prevState) => ({ time: prevState.time + 1 }));
        }, 1000);
      } else {
        clearInterval(this.timer);
      }
    }

    console.log("Previous Props :", prevProps);
    console.log("Previous State :", prevState);
    console.log("SnapShot from getSnapshotbeforeUpdate", snapShot);
  }
  componentWillUnmount() {
    console.log("TimerOne componentWillUnmount");
    clearInterval(this.timer);
  }
}
