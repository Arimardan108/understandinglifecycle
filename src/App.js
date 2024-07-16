import React from "react";
import TimerOne from "./Components/Timer/TimerOne";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      timerOn: false,
    };
  }
  handleTimerOn = () => {
    this.setState((prevState) => ({ timerOn: !prevState.timerOn }));
  };
  render() {
    return (
      <>
        <button onClick={this.handleMount}>
          {this.state.mount ? "UN-MOUNT" : "MOUNT"}
        </button>
        {this.state.mount ? <TimerOne /> : null}
      </>
    );
  }
}
export default App;
