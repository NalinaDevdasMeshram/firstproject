/* eslint-disable react/prop-types */
import React from "react";
class Input extends React.Component {
  handleChange = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    this.props.onCountChange(value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter Here Number"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
export default Input;
