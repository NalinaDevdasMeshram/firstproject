import { useEffect, useState } from "react";

// import React from "react";
function ApiUseEffect(){
    const [users, setUsers]=useState([]);
    const handleUserFetchApi =async()=>{
        const response =  await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data)
    }
    useEffect(()=>{
        handleUserFetchApi();
        
    },[])
 return(
    <div>
        <h1 style={{textAlign:'center'}}>UserList</h1>
        {users.map((user)=>{
         return <p key={user.id}>{user.name}</p>
        })}
        
    </div>
  )
}
export default ApiUseEffect;