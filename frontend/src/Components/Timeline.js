import React, { useState } from "react";
import "../CSS/Timeline.css";
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
          }}
        >
          Tweet
        </button>
      </form>

      <NewTweet
        pfp={"https://i.imgur.com/a5nXjAH.jpeg"}
        username={"Uncle Iroh"}
        text="Hello World!"
        imglink={
          "https://media.tenor.com/HwviI3ONhTgAAAAC/avatar-the-last-airbender-iroh.gif"
        }
      />
      <NewTweet
        pfp={
          "https://cdn.discordapp.com/attachments/718584296725807116/746386168387469393/image0.jpg"
        }
        username={"Dogie"}
        text="Im Dogie"
        imglink={"https://i.imgur.com/bzswIVK.jpeg"}
      />

      <NewTweet
        pfp={DefaultProfile}
        username={"New User 2000"}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
    </div>
  );
}

export default Timeline;
