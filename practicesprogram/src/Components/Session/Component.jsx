import React from "react";
import Header from "./Header";
import Button from "./Button";
import Display from "./Display";
class Component extends React.Component{
    //  constconstructor(){
    //     this.super();
    // }
render(){
     return(
        <div>
         <Header/>
         <Button/>
         <Display/>
         </div>
        );
    }
}
export default Component