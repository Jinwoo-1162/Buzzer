import React from "react";
import "../CSS/Profile.css";
import Sidebar from "../Components/Sidebar.js";
import Activity from "../Components/Activity";

function Profile() {
    return (
        <div className="home">
            <Sidebar pageName="Profile"/>
            <div className="home_header">
                <Activity />
            </div>
            <div className="post"></div>
        </div>
    )
}

export default Profile;
