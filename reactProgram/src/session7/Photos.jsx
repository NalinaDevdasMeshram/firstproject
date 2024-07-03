import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Photos =()=>{
    const [photos, setPhotos] = useState([]);
    const {id} = useParams();
    console.log('id', id)
     const handlePhotoFetch=async()=>{
         try{
            const response = await fetch('https://jsonplaceholder.typicode.com/photos');
             const  data = await response.json();
            //  console.log('data', data)
            const filterPhotos = data.filter((photo)=>(
              photo.albumId === Number(id))
            )
             setPhotos(filterPhotos);
            }
         catch(e){
            console.log('something went wrong', e.message)
         }
     }
     useEffect(()=>{
        handlePhotoFetch();
     },[]);
    return (
        <div>
            <h2><center>Photos</center></h2>
            {
                photos.map((photo)=>{
                    return(
                        <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title}/>
                       )
                })
            }
        </div>
    )

}
export default Photos