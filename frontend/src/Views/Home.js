import React from "react";
import "../CSS/Home.css";
import Sidebar from "../Components/Sidebar.js";
import Timeline from "../Components/Timeline";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="home_header">
        <Timeline />
      </div>
      <div className="post"></div>
    </div>
  );
}

export default Home;
