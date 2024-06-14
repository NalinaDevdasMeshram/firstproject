import React from "react";
import Header from "./Header";
import Buttons from "./Buttons";
import Display from "./Dispaly";

class Counter extends React.Component{
    constructor(){
        super();
        this.state={
            count:0,
        };
    }
    handleIncrement =()=>{
        this.setState((prevState)=>{
            return {count: prevState.count + 1};
        });
    }
    handleDecrement =()=>{
        this.setState((prevState)=>{
            return {count: prevState.count - 1};
        });
    }
    render(){
        return(
            <div>
            <Header/>
            <Buttons onClick={this.handleIncrement} btntext="+"/>
            <Display displayValue={this.state.count}/>
            <Buttons onClick={this.handleDecrement} btntext="-"/>
             </div>
            );
    }
}
export default Counter;