import React from "react";
class Albums extends React.Component{
    constructor(){
        super();
        this.state={
            Albums:[]
        }
    }
    handleFetch =async()=>{
        const respons = await fetch('https://jsonplaceholder.typicode.com/albums') 
        const data = await respons.json();
        console.log(data)
        this.setState({Albums:data})
    }
    componentDidMount(){
        this.handleFetch();
    }
    render(){
        return(
            <div>
                Albums 
                {this.state.Albums.map((album)=>{
                    return(
                    <p key={album.id}>
                    {album.title}
                    </p>)
                })}
            </div>
        )
    }
}
export default Albums;