import { useEffect, useState } from "react"

function UseEffectComponent(){
     const [count, setCount]=useState(0);
    useEffect(()=>{
        console.log('component Did mount')
     },[count])
 return(
    <div>
        <h3>Welcome to the useEffect</h3>
        <button onClick={()=>{setCount((prevState)=>prevState+1)}}>increment{count}</button>
    </div>
 )
}
export default UseEffectComponent