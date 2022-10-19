import React from "react";
import "../CSS/SidebarMaker.css";
import { Link } from "react-router-dom";

function SidebarMaker({ text, url }) {
  return (
    <div className={`sidebarMaker`}>
      <h2>
        {/* {text} */}
        <Link to={url}>{text}</Link>
      </h2>
    </div>
  );
}

export default SidebarMaker;
