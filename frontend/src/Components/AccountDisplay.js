import React from "react";
import "../CSS/AccountDisplay.css";
import { TwitterFollowButton } from "react-twitter-embed";

function AccountDisplay({ accountIconLink, name, username }) {
  return (
    <div className="account-display">
      <div className="account-display-container">
        <img
          className="account-display-icon"
          src={accountIconLink}
          alt="icon"
        ></img>
      </div>
      <div className="account-display-name-container">
        <span className="account-display-name"> {name} </span>
        <span className="account-display-username"> {username} </span>
      </div>
      <div className="account-display-followbutton">
        <button type="submit">Follow</button>
      </div>
    </div>
  );
}

export default AccountDisplay;
