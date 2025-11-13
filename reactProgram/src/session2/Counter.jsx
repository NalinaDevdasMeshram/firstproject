import React from "react";
import Header from "./Header";
import Button from "./Button";
import Dispaly from "./Display";
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  handleIncrement = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  handleDecrement = () => {
    this.setState((prevState) => {
      return { count: prevState.count - 1 };
    });
  };
  render() {
    return (
      <div>
        <Header />
        <Button btnClick={this.handleIncrement} btntext="+" />
        <Dispaly displayValue={this.state.count} />
        <Button btnClick={this.handleDecrement} btntext="-" />
      </div>
    );
  }
}
export default Counter;
