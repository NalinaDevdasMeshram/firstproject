/* eslint-disable react/prop-types */

import React from "react";

class Dispaly extends React.Component{
 render(){
    return(
        <div>
            <p>{this.props.displayValue}</p>
        </div>
    )
 }
}
export default Dispaly;