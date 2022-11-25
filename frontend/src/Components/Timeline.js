import React, { useState, useEffect } from "react";
import "../CSS/Timeline.css";
import DefaultProfile from "../Images/DefaultTwitterpfp.png";
import NewTweet from "./NewTweet";
import axios from "axios";

function Timeline(props) {
  const [tweet, setTweet] = useState("");
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
            imglink={""}
            comments={ele.comments}
            retweets={ele.retweets}
            likes={ele.likes}
            timeStamp={new Date(ele.timeStamp).toLocaleString()}
          />
        );
      })}

      <NewTweet
        pfp={"https://i.imgur.com/a5nXjAH.jpeg"}
        username={"Uncle Iroh"}
        text="Hello World!"
        imglink={
          "https://media.tenor.com/HwviI3ONhTgAAAAC/avatar-the-last-airbender-iroh.gif"
        }
        comments={15}
        retweets={57}
        likes={123}
        timeStamp={new Date().toLocaleString()}
      />
      <NewTweet
        pfp={
          "https://cdn.discordapp.com/attachments/718584296725807116/746386168387469393/image0.jpg"
        }
        username={"Dogie"}
        text="Im Dogie"
        imglink={"https://i.imgur.com/bzswIVK.jpeg"}
        timeStamp={new Date().toLocaleString()}
      />

      <NewTweet
        pfp={DefaultProfile}
        username={"New User 2000"}
        timeStamp={new Date().toLocaleString()}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
    </div>
  );
}

export default Timeline;
