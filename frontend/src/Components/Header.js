import React from "react";
import "../CSS/Header.css";
import DefaultProfile from "../Images/DefaultTwitterpfp.png";

function Header() {
  return (
    <div class="new-tweet">
      <img id="pfp" src={DefaultProfile} alt="DefaultPFP"></img>
      <form id="addTweet">
        <input
          type="text"
          class="tweet-text-content"
          placeholder="What's happening?"
        />
        <button id="button" onClick={Suprise}>
          Tweet
        </button>
      </form>
    </div>
  );
}
function Suprise() {
  alert("Congrats you clicked it!");
}

export default Header;
