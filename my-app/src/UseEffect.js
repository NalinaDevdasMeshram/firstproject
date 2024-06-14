// useEffect,is a hook which grt
import React, {useEffect, useState} from "react";
function UseEffect(){
    const [count , setCount] = useState(0)
    useEffect(()=>{
        console.log("hello I am useEffect")
    },[count]);
    return(
        <div>Hello UseEffect {' '}<button onClick={()=>setCount((prev)=> prev+1)}>Increment count{count}</button></div>
    )
}
export default UseEffect;