import React from "react";
import "../CSS/SidebarMaker.css";

function SidebarMaker({ text, pageName }) {
  return (
    <div className={`sidebarMaker ${text == pageName ? "tab-is-selected" : ""}`}>
      <a className="nav-link" href={text == "Home" ? "/" : text} > 
        <h2 className="nav-link">{text}</h2>
      </a>
    </div>
  );
}

export default SidebarMaker;
