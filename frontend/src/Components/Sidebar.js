import React from "react";
import "../CSS/Sidebar.css";
import SidebarMaker from "./SidebarMaker";
import BuzzerLogo from "../Images/BuzzerLogo2.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <img id="logo" src={BuzzerLogo} alt="Buzzer pic" />
      <a href="/">
        <SidebarMaker text="Home" />
      </a>
      <a href="/explore">
        <SidebarMaker text="Explore" />
      </a>
      <a href="/notifications">
        <SidebarMaker text="Notifications" />
      </a>
      <SidebarMaker text="Messages" />
      <SidebarMaker text="Bookmarks" />
      <SidebarMaker text="Lists" />
      <SidebarMaker text="Profile" />
      <SidebarMaker text="More" />
    </div>
  );
}

export default Sidebar;
