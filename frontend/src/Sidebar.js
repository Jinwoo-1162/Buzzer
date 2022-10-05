import React from "react";
import "./Sidebar.css";
import SidebarMaker from "./SidebarMaker";
import BuzzerLogo from "./BuzzerLogo2.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <img id="logo" src={BuzzerLogo} alt="Buzzer pic" />
      <SidebarMaker text="Home" />
      <SidebarMaker text="Explore" />
      <SidebarMaker text="Notifications" />
      <SidebarMaker text="Messages" />
      <SidebarMaker text="Bookmarks" />
      <SidebarMaker text="Lists" />
      <SidebarMaker text="Profile" />
      <SidebarMaker text="More" />
    </div>
  );
}

export default Sidebar;
