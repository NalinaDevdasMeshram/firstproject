import React from "react";
import Input from "./Input";
import Button from "./Button";
class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  handleChange = (count) => {
    this.setState({ count });
  };
  onDecrement = () => {
    this.setState((preState) => ({
      count: preState.count - 1,
    }));
  };
  render() {
    return (
      <div>
        <Input onCountChange={this.handleChange} />
        <Button count={this.state.count} onDecrement={this.handleDecrement} />
      </div>
    );
  }
}
export default Timer;
