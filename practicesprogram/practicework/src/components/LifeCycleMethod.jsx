import react from "react";
class LifeCycleMethod extends react.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("Hey I am component did mount", this.state.count);
  }
  componentDidUpdate() {
    console.log("hey, I am Did update", this.state.count);
  }
  componentWillUnmount() {
    console.log("Hey I am component will unmount", this.state.count);
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Life Cycle Method </h1>
        <button
          onClick={() => this.setState((prev) => ({ count: prev.count + 1 }))}
        >
          Increment
        </button>
        <span>{this.state.count}</span>
        <button
          onClick={() => this.setState((prev) => ({ count: prev.count - 1 }))}
        >
          Decrement
        </button>
      </div>
    );
  }
}
export default LifeCycleMethod;
