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
        <h1>
          Time Spend:
          {new Date(this.state.time * 1000).toISOString().slice(11, 19)}
        </h1>
      </>
    );
  }
  componentDidMount() {
    console.log("TimerOne componentDidMount");
    console.log("__________________________");

    this.timer = setInterval(() => {
      this.setState((prevState) => ({ time: prevState.time + 1 }));
    }, 1000);
  }
  getSnapshotBeforeUpdate() {
    console.log("TimeOne getSanpshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("TimerOne componentDidUpdate");
    console.log("___________________________");
    if (this.state.time == 10) {
      clearInterval(this.timer);
    }
  }
}
