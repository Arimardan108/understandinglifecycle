import { Component } from "react";
export default class ErrorBoundry extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log("Error:", error);
    console.log("Error info:", info);
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Concect Admin</h1>;
    }
    return <></>;
  }
}
