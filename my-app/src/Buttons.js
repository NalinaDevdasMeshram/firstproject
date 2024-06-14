import React from "react";
class Buttons extends React.Component{
    render(){
        return (
            <button onClick={this.props.onClick}>{this.props.btntext}</button>
        );
    }
}

export default Buttons;