import React from "react";
import "../CSS/Notifications.css";
import Sidebar from "../Components/Sidebar"
import NotificationsHeader from "../Components/NotificationsHeader";

function Notifications() {
  return (
    <div className="notifications"  style={{display: "flex", flexDirection: "row"}}>
        <Sidebar />
        <NotificationsHeader pageName = "notifications-page" />
      </div>
  );
}

export default Notifications;