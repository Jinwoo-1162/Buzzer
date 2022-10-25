import React from "react";
import "../CSS/Home.css";
import Sidebar from "../Components/Sidebar"

function Notifications() {
  return (
    <div className="Notifications">
        <header className="Notifications"></header>
        <Sidebar />
        <h1>Notifications</h1>
        <p>This is a paragraph for the Notifications page</p>

        <h2>Buzz Notifications</h2>

        <h2>Follow Requests</h2>

      </div>
  );
}

export default Notifications;