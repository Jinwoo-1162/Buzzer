import React from "react";
import "../CSS/Profile.css";
import Sidebar from "../Components/Sidebar.js";
import Activity from "../Components/Activity";
import WidgetsSidebar from "../Components/WidgetsSidebar";
import ProfileHeader from "../Components/ProfileHeader";
import ProfileBio from "../Components/ProfileBio";
import EditButton from "../Components/EditButton";


function Profile() {
    return (
        <div className="profile">
            <Sidebar pageName="Explore" />
            <div className="profile-header">
                <div className="profile-page">
                    <ProfileHeader />
                    <ProfileBio />
                    <EditButton />
                    <Activity />
                </div>
            </div>
            <WidgetsSidebar />
        </div>
    )
}

export default Profile;