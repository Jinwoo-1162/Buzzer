import React from "react";
import "../CSS/SidebarMaker.css";

function SidebarMaker({ text }) {
  return (
    <div className={`sidebarMaker`}>
      <a href={text == "Home" ? "/" : text}> {text} </a>
    </div>
  );
}

export default SidebarMaker;
