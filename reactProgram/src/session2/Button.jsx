/* eslint-disable react/prop-types */
import React from "react";
class Button extends React.Component{
    render(){
        return(
            <button onClick={this.props.btnClick}>{this.props.btntext}</button>
        )
    }
}
export default Button;