/* eslint-disable react/prop-types */
import React from "react";
class Dispaly extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.displayValue}</span>
      </div>
    );
  }
}
export default Dispaly;
