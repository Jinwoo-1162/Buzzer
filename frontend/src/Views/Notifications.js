import React from "react";
import "../CSS/Notifications.css";
import Sidebar from "../Components/Sidebar"

function Notifications() {
  return (
    <div className="Notifications"  style={{display: "flex", flexDirection: "row"}}>
        <Sidebar />
        <h2>People you Follow</h2>
      </div>
  );
}

export default Notifications;