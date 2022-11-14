import React from "react";
import "../CSS/NewTweet.css";
import like from "../Images/heart.png";
import share from "../Images/share.png";
import retweet from "../Images/rebuzz.png";
import comment from "../Images/comment.png";

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
        <div className="newTweet_footer">
          <button>
            <img id="comment_symbol" src={comment} alt="comment symbol"></img>
            <span className="button_span">1</span>
          </button>
          <button>
            <img id="retweet_symbol" src={retweet} alt="retweet symbol"></img>
            <span className="button_span">1</span>
          </button>
          <button>
            <img id="like_symbol" src={like} alt="heart symbol"></img>
            <span className="button_span">1</span>
          </button>
          <button>
            <img id="share_symbol" src={share} alt="share symbol"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewTweet;
