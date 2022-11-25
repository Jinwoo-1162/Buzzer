import React from "react";
import { useState } from "react";
import "../CSS/NewTweet.css";
import likeIcon from "../Images/heart.png";
import shareIcon from "../Images/share.png";
import retweetIcon from "../Images/rebuzz.png";
import commentIcon from "../Images/comment.png";

function NewTweet({
  pfp,
  username,
  text,
  imglink,
  comments,
  retweets,
  likes,
  timeStamp,
}) {
  const [commentsCount, setCommentsCount] = useState(
    isNaN(comments) ? 0 : comments
  );

  const incrementComments = () => {
    setCommentsCount((count) => count + 1);
  };

  const [retweetsCount, setRetweetsCount] = useState(
    isNaN(retweets) ? 0 : retweets
  );

  const incrementRetweets = () => {
    setRetweetsCount((retweetsCount) => retweetsCount + 1);
  };

  const [likesCount, setLikesCount] = useState(isNaN(likes) ? 0 : likes);

  const incrementLikes = () => {
    setLikesCount((likesCount) => likesCount + 1);
  };

  // Is there a better way to update cooments, retweets, and likes without making seperate functions for each value?
  return (
    <div className="newtweet">
      <div className="newtweet_avatar">
        <img id="newtweet_pfp" src={pfp} alt="Profile"></img>
      </div>
      <div className="newtweet_body">
        <div className="newtweet_user">
          <div className="newtweet_userInfo">
            <h3>
              {username}
              <span className="newtweet_timestamp"> · {timeStamp}</span>
            </h3>
          </div>
          <div className="newtweet_tweetMessage">
            <p>{text}</p>
          </div>
        </div>
        <img src={imglink}></img>
        <div className="newTweet_footer">
          <button onClick={incrementComments}>
            <img id="comment_symbol" src={commentIcon}></img>
            <span className="button_span">{commentsCount}</span>
          </button>
          <button onClick={incrementRetweets}>
            <img id="retweet_symbol" src={retweetIcon}></img>
            <span className="button_span">{retweetsCount}</span>
          </button>
          <button onClick={incrementLikes}>
            <img id="like_symbol" src={likeIcon} alt="heart symbol"></img>
            <span className="button_span">{likesCount}</span>
          </button>
          <button>
            <img id="share_symbol" src={shareIcon} alt="share symbol"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewTweet;
