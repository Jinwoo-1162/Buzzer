import React from "react";
import "../CSS/NewTweet.css";

function NewTweet({ pfp, username, text, imglink }) {
  return (
    <div className="newtweet">
      <div className="newtweet_avatar">
        <img id="newtweet_pfp" src={pfp} alt="Profile"></img>
      </div>
      <div className="newtweet_body">
        <div className="newtweet_user">
          <div className="newtweet_userInfo">
            <h3>{username}</h3>
          </div>
          <div className="newtweet_tweetMessage">
            <p>{text}</p>
          </div>
        </div>
        <img src={imglink}></img>
      </div>
    </div>
  );
}

export default NewTweet;
