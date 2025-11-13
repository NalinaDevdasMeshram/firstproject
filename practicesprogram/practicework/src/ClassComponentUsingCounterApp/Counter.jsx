import React from "react";
import Header from "./Header";
import Button from "./Button";
import Display from "./Dispaly";
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  handleIncrement = () => {
    this.setState((prev) => {
      return { count: prev.count + 1 };
    });
  };
  handleDecrement = () => {
    this.setState((prev) => {
      return { count: prev.count - 1 };
    });
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Header />
        <Button btnclick={this.handleIncrement} btnText="+" />
        <Display displayValue={this.state.count} />
        <Button btnclick={this.handleDecrement} btnText="-" />
      </div>
    );
  }
}
export default Counter;
