/* eslint-disable no-unused-vars */
import React from "react";

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("Constructor: Component is being initialized");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps: Sync state with props if needed");
    return null; // return new state or null
  }

  componentDidMount() {
    console.log("componentDidMount: Component has been mounted");
    // Simulating a data fetch or DOM manipulation
    this.setState({ count: this.state.count + 1 });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: Should component update?");
    return true; // return false to prevent re-rendering
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate: Snapshot before DOM updates");
    return null; // You can return something here to be passed to componentDidUpdate
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate: Component was updated");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Component will unmount");
  }

  render() {
    console.log("Render: Rendering the component");
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default LifecycleDemo;
