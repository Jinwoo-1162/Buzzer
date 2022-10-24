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
      <a className="nav-link" href={text == "Home" ? "/" : text} > 
        <h2 className="nav-link">{text}</h2>
      </a>
    </div>
  );
}

export default SidebarMaker;
