// import react from 'react';
 import ImageGallery from './ImageGallery';
 import Albums from './Albums';
import { Route, Routes } from 'react-router-dom';

const Home =()=>{
 return(
    // <div>
    //     <Albums/>
    //     <ImageGallery/>
    // </div>
    <Routes>
     <Route  path='/' element={<Albums/>}/>
     <Route  path='/ImageGallery/:id' element={<ImageGallery/>}/>
    </Routes>
 )
}
export default Home;