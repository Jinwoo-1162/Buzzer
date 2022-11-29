import React from "react";
import "../CSS/SidebarMaker.css";

function EditButton({ text }) {
  return (
    <div className={`edit-button ${text == text ? "button-is-selected" : ""}`}>
      <a className="nav-link" href={text == "Edit Profile" ? "/" : text} > 
        <h2 className="nav-link">{text}</h2>
      </a>
    </div>
  );
}

export default EditButton;
