import react from 'react';
class Photos extends react.Component{
    constructor(){
        super();
        this.state={
            photos:[],
        };
    }
     handleFetch =async()=>{
        const response = await fetch ('https://jsonplaceholder.typicode.com/photos')
        const data = await response.json();
        console.log('data', data)
        this.setState({photos:data})
     }
     componentDidMount(){
        this.handleFetch();
     }
    render(){
       return (
        <div>
           {this.state.photos.map((photo)=>{
            return(
                
            <img src={photo.thumbnailUrl} alt={photo.title} key={photo.id}/>
                )
           })} 
        </div>
       );
    }

}
export default Photos;