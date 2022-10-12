import React from "react";
import "../CSS/Sidebar.css";
import SidebarMaker from "./SidebarMaker";
import BuzzerLogo from "../Images/BuzzerLogo2.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <img id="logo" src={BuzzerLogo} alt="Buzzer pic" />
      <SidebarMaker text="Home" />
      <SidebarMaker text="Explore" />
      <SidebarMaker text="Notifications" />
      <SidebarMaker text="Messages" url="/messages" />
      <SidebarMaker text="Bookmarks" />
      <SidebarMaker text="Lists" />
      <SidebarMaker text="Profile" />
      <SidebarMaker text="More" />
    </div>
  );
}

export default Sidebar;
