import React from "react";
import ComponentA from "./Components/Component/ComponentA";
import ErrorBoundry from "./ErrorBoundry";
class App extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <>
        <ErrorBoundry>
          <ComponentA />
        </ErrorBoundry>
      </>
    );
  }
}

export default App;
