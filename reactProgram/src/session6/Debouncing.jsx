import { useEffect, useRef, useState } from "react";

const debounce =(fn, delay)=>{
   let timerId;
        return function(...args){
            if(timerId){
                clearTimeout(timerId);
            }
            
            timerId = setTimeout(() => fn(...args), delay)
        };
    
};
const Debouncing =()=>{
    const [search, setSearch] = useState('');
    const handleSearch =(searchText)=>{
        console.log('searchtext::', searchText);
    };
    const debouncesearch = useRef(debounce(handleSearch, 500)).current;
    useEffect(()=>{
        if(search){
            debouncesearch(search)
        }
    }, [search]);

    return(
        <div>
           <p>Hello Welcome</p>
           <input value={search}
            onChange={(e)=>{
            // console.log(e.target.value)
            setSearch(e.target.value)
            }} 
           />
        </div>
    );

}
export default Debouncing;