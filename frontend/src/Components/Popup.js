import React from "react";
import "../CSS/Popup.css";
import XIcon from "../Images/x-icon.png";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-background">
        <div className="popup-inner">
          <button
            className="close-button"
            onClick={() => props.setTrigger(false)}
          >
            <img id="close-symbol" src={XIcon}></img>
          </button>
          {props.children}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
