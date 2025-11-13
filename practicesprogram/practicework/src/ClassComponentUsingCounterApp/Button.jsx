/* eslint-disable react/prop-types */
import React from "react";
class Button extends React.Component {
  render() {
    return <button onClick={this.props.btnclick}>{this.props.btnText}</button>;
  }
}
export default Button;
