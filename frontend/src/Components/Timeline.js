import React, { useState, useEffect } from "react";
import "../CSS/Timeline.css";
import DefaultProfile from "../Images/DefaultTwitterpfp.png";
import NewTweet from "./NewTweet";
import axios from "axios";

function Timeline(props) {
  const [tweet, setTweet] = useState("");
  const [mediaLink, setMediaLink] = useState("");

  useEffect(() => {
    console.log(props.tweetsList);
  }, [props.tweetsList]);

  const handleSubmit = (event) => {
    // event.preventDefault();
    // alert("Tweet sucessfully not submitted!");
    axios
      .post(
        "http://localhost:8080/tweet/add",
        {
          // data to sent to the server - post body
          // it can be an empty object
        },
        {
          // specify query parameters
          params: {
            author: "defaultUser",
            bodyText: tweet,
            media: mediaLink,
          },
        }
      )
      .then((res) => res.status)
      .catch((err) => {
        console.log(err);
      });
    alert("Tweet sucessfully submitted!");
  };
  return (
    <div className="timeline">
      <div className="timeline_heading">
        <span>Latest Tweets</span>
      </div>
      <form id="timeline_addTweet" onSubmit={handleSubmit}>
        <div className="timeline_text_content">
          <img id="timeline_pfp" src={DefaultProfile} alt="DefaultPFP"></img>
          <input
            id="timeline_input"
            type="text"
            value={tweet}
            onChange={(update) => setTweet(update.target.value)}
            class="timeline-tweet-text-content"
            placeholder="What's happening?"
          />

          <input
            id="timeline_input"
            type="text"
            value={mediaLink}
            onChange={(update) => setMediaLink(update.target.value)}
            class="timeline-tweet-text-content"
            placeholder="Insert Media Link"
          />
        </div>
        <button id="timeline_button" type="submit">
          Tweet
        </button>
      </form>
      {props.tweetsList.map((ele) => {
        return (
          <NewTweet
            pfp={DefaultProfile}
            username={ele.author}
            text={ele.bodyText}
            imglink={ele.media}
            comments={ele.comments}
            retweets={ele.retweets}
            likes={ele.likes}
            timeStamp={new Date(ele.timeStamp).toLocaleString()}
          />
        );
      })}
    </div>
  );
}

export default Timeline;
