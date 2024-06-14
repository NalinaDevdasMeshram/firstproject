import React from "react";
class LifeCycle extends React.Component{
    constructor(){
        super();
        this.state={
            count:0,
        }
    }
    componentDidMount(){
        console.log("Hey I am Component Did Mount", this.state.count)
    }
    componentDidUpdate(){
        console.log("Hey I am component did update", this.state.count);
    }
    componentWillUnmount(){
        console.log("Hey I am Component Will UnMount", this.state.count)
    }
    render(){
        return(
            <div>
            <div>Hello World</div>
           <button onClick={()=>this.setState((prev)=>({count:prev.count+1}))}>Increment</button>
            <button onClick={()=>this.setState((prev)=>({count:prev.count -1}))}>Decrement</button> 
            </div>
        )
    }
}

export default LifeCycle