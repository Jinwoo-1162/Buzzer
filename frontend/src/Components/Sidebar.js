import React from "react";
import "../CSS/Sidebar.css";
import SidebarMaker from "./SidebarMaker";
import BuzzerLogo from "../Images/BuzzerLogo2.png";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <img id="logo" src={BuzzerLogo} alt="Buzzer pic" />
      <a href="/"> <SidebarMaker text="Home" pageName={props.pageName}/></a>
      <SidebarMaker text="Explore" pageName={props.pageName}/>
      <SidebarMaker text="Notifications" pageName={props.pageName}/>
      <SidebarMaker text="Messages" pageName={props.pageName}/>
      <SidebarMaker text="Bookmarks" pageName={props.pageName}/>
      <SidebarMaker text="Lists" pageName={props.pageName}/>
      <SidebarMaker text="Profile" pageName={props.pageName}/>
      <SidebarMaker text="More" pageName={props.pageName}/>
      <button id="button"> Tweet </button>
    </div>
  );
}

export default Sidebar;
