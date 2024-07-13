import React from "react";
import ComponentB from "./ComponentB";
class ComponentA extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "ComponentA",
      data: [],
    };
    console.log("ComponentA Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("ComponentA getDriveredStateByProps");
    return null;
  }

  // https://jsonplaceholder.typicode.com/users/

  componentDidMount() {
    console.log("ComponntA ComponentDidMount");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }
  render() {
    console.log(this.state.data);
    // this.setState({
    //   name: "CA",
    // });

    return (
      <>
        <h1>{this.state.name}</h1>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <ul>
          {this.state.data.map((item) => (
            <li>{item.username}</li>
          ))}
        </ul>


        
      </>
    );
  }
}

export default ComponentA;
