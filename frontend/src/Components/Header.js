import React from "react";
import "../CSS/Header.css";
import DefaultProfile from "../Images/DefaultTwitterpfp.png";

function Header({ text }) {
  return (
    <div className={`Header`}>
      <h1> Latest Tweets</h1>
      <img id="pfp" src={DefaultProfile} alt="DefaultPFP"></img>
      <h2 id="prompt">What's Happening?</h2>
      <div className="tweet-button">
        <button id="button" onClick={Suprise}>
          Tweet
        </button>
      </div>
    </div>
  );
}
function Suprise() {
  alert("BOO!");
}

export default Header;
