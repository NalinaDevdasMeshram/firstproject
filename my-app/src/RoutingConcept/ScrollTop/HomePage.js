import React from "react";
import ProfilePage from "./ProfilePage";
import { Route, Routes } from "react-router-dom";
import PageOne from "./PageOne";

const HomePage =()=>{
    return(
        // <div>
        //    <PageOne/>
        //    <ProfilePage/>
        // </div>
        <Routes>
            <Route path ="/" element={<PageOne/>}/>
            <Route path ="/ProfilePage" element={<ProfilePage/>}/>
        </Routes>
    )
}
export default HomePage;