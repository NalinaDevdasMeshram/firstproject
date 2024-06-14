import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ImageGallery = ()=>{
    const [photos, setPhotos] = useState([])
    const {id} = useParams();
    const Fetchphotos =async()=>{
        try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
        const photosdata = await response.json();
        const filterPhotosData = photosdata.filter((photo)=>
         photo.albumId === Number(id)
         )
         setPhotos(filterPhotosData)
        }
        catch(error){
          console.log("something went wrong try again")
        }
    } 
    useEffect(()=>{
        Fetchphotos(); 
    },[])
        
    
    
    return(
    <div>
        <h1><center>photos Gallery</center></h1>
        {
            photos.map((photo)=>{
             return(
               <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title}/>
               )
            })
        }
        </div>)
}
export default ImageGallery;