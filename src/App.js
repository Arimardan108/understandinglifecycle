import React from "react";
import ComponentA from "./Components/Component/ComponentA";
import ComponentB from "./Components/Component/ComponentB";

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

        <ErrorBoundry>
          <ComponentB />
        </ErrorBoundry>
      </>
    );
  }
}

export default App;






