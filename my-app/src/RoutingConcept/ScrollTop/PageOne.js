import React from "react";
import { Link } from "react-router-dom";

const PageOne = () =>{
 return (
    <div>
    <Link to={`PageOne/`} key={PageOne} />
    <p>Page One is the here</p>
     
     </div>
   )
}
export default PageOne;