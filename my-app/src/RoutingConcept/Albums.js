import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
const Albums =()=>{
    const [albums, setAlbums] = useState([]);
   
    const FetchAlbumsData=async()=>{
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/albums`)
            const albumsdata = await response.json();
            //  console.log(albumsdata);
           setAlbums(albumsdata)  
        } 
        catch(error){
            console.log("somethings went wrong try again")
        }
     
    }
    useEffect(()=>{
        FetchAlbumsData();
    },[])

    return (
        <div>
    
        <h1><center> Hello Albums</center></h1>
        {albums.map((album)=>{
            return(
                <Link to ={`ImageGallery/${album.id}`} key={album.id}>
                <p>album id:{album.id}</p>
                <p> album title:{album.title}</p>
                </Link>
            )
        })
    }
    </div>
)
}

export default Albums;