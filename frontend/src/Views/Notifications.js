import React from "react";
import "../CSS/Notifications.css";
import Sidebar from "../Components/Sidebar"

function Notifications() {
  return (
    <div className="Notifications"  style={{display: "flex", flexDirection: "row"}}>
        <Sidebar />
        <h1>People You Follow</h1>
      </div>
  );
}

export default Notifications;