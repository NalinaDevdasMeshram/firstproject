/* eslint-disable react/prop-types */
/* eslint-disable no-global-assign */
import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: null,
    };
  }
  start = () => {
    const { intervalId } = this.state;
    if (!intervalId) {
      const id = (setInterval =
        (() => {
          if (this.props.count > 0) {
            this.props.onDecrement();
          } else {
            this.stop();
          }
        },
        1000));

      this.setState({ intervalId: id });
    }
  };

  stop = () => {
    const { intervalId } = this.state;
    if (intervalId) {
      clearInterval(intervalId);
      this.setState({ intervalId: null });
    }
  };
  render() {
    return (
      <div>
        <button style={{ margin: "10px" }} onClick={this.start}>
          Start
        </button>
        <button onClick={this.stop}>Stop</button>
        <p>Count:{this.props.count}</p>
      </div>
    );
  }
}
export default Button;
