import {  useEffect, useRef, useState } from "react"
const UseRefWork=()=>{
    const [search, setSearch] = useState('');
     const inputRef = useRef(null);
     useEffect(()=>{
        console.log('inputref::',inputRef)
        inputRef?.current?.focus();
     },[])
    return(
        <div>
            <p>hello world</p>
            <input value={search} 
             ref={inputRef}
            onChange={(e)=>setSearch(e.target.value)}
            />
            </div>
    );
}
export default UseRefWork