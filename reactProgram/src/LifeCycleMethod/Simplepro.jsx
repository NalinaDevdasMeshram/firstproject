import React from "react";
class Simplepro extends React.Component{
    constructor(){
        super();
        this.state={
            count:0,
        };
    }
    componentDidMount(){
        console.log('Hello I am component Did Mount',this.state.count);
    }
    componentDidUpdate(){
         console.log(this.state.count)
     console.log('Hey I am componnet Did update',this.state.count);
    }
   
    render(){
        return(
            <div>
                <h1>Hello World</h1>
                <button onClick={()=>this.setState((prev)=>({count:prev.count+1}))}>Increment</button>
                <button onClick={()=>this.setState((prev)=>({count:prev.count+1}))}>Decrement</button>
            </div>
        );
    }

}
export default Simplepro;