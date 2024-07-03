import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

const Albums =()=>{
     const [albums, SetAlbums] = useState([]);
    const handleFetchApi =async()=>{
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/albums');
         const data = await response.json();
         SetAlbums(data)
        }catch(e){
              console.log("something went wrong", e.message)
        }
        
    }
    useEffect(()=>{
        handleFetchApi();
    },[])

    return (
        <div>
            <h5>
            <center>Image Gallery</center>
            </h5>
            {albums.map((album) =>
            {
            return(
                <Link to ={`Photos/${album.id}`} key={album.id}>
                <p>Albums id:{album.id}</p>
                <p> Albums title:{album.title}</p> 
                </Link>
                    );
                })
            }
            
        </div>
    )
}
export default Albums;