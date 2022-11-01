import React, { useState } from "react";
import "../CSS/Activity.css";
import DefaultProfile from "../Images/DefaultTwitterpfp.png";
import NewTweet from "./NewTweet";

function Timeline() {
  const [tweet, setTweet] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div class="timeline">
      <form id="timeline_addTweet" onSubmit={handleSubmit}>
        <div className="timeline_text_content">
          <img id="timeline_pfp" src={DefaultProfile} alt="DefaultPFP"></img>
          <input
            type="text"
            value={tweet}
            onChange={(update) => setTweet(update.target.value)}
            class="timeline-tweet-text-content"
            placeholder="What's happening?"
          />
        </div>
        <button
          id="timeline_button"
          onClick={() => {
            alert("Tweet sucessfully not submitted!");
          }}>
          Tweet
        </button>
      </form>

      <NewTweet
        pfp={DefaultProfile}
        username={"Me"}
        text="Tweet 3"
      />
      <NewTweet
        pfp={DefaultProfile}
        username={"Me"}
        text="Tweet 2"
      />

      <NewTweet
        pfp={DefaultProfile}
        username={"Me"}
        text="Tweet 1"
      />
    </div>
  );
}

export default Timeline;
