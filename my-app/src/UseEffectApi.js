import React, { useEffect, useState } from "react";
function UseEffectApi(){
     const [users, setUser] = useState([]);
     const fetchApi = async ()=>{
       const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const users = await response.json();
        setUser(users)
     };
     useEffect(()=>{
        fetchApi();
     },[])
     return (
     <div>userlist
        {users.map((user)=>{
        return <p  key={user.id}>{user.name}</p>
     })}
     </div>
    
    );
}

export default UseEffectApi;