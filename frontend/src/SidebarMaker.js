import React from "react";
import "./SidebarMaker.css";

function SidebarMaker({ text }) {
  return (
    <div className={`sidebarMaker`}>
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarMaker;
