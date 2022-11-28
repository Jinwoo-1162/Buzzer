import React from "react";
import "../CSS/Notifications.css";
import Sidebar from "../Components/Sidebar"
import NotificationsHeader from "../Components/NotificationsHeader";
import WidgetsSidebar from "../Components/WidgetsSidebar";

function Notifications() {
  return (
    <div className="notifications" >
        <Sidebar />
        <NotificationsHeader pageName = "notifications-page" />
        <WidgetsSidebar />
    </div>
  );
}

export default Notifications;