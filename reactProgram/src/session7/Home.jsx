
import Photos from "./Photos";
import Albums from './Albums';
import {Routes, Route} from 'react-router-dom';
const Home =()=>{
    return(
        <Routes>
            <Route path='/' element={<Albums/>}/>
            <Route path='/Photos/:id' element={<Photos/>}/>
        </Routes>
    
    );
  
 
}
export default Home;