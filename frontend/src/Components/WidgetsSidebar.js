import React from "react";
import "../CSS/WidgetsSidebar.css";
import SearchBox from "./SearchBox";
import {
  TwitterTimelineEmbed,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import searchIcon from "../Images/searchIcon.png";
import AccountDisplay from "./AccountDisplay.js";
import DefaultPFP from "../Images/DefaultTwitterpfp.png";

function WidgetsSidebar(props) {
  return (
    <div className="widgets-sidebar">
			{props.showSearchBox=="true"?(
				<div className="search-section">
					<SearchBox className="search-bar"/>
				</div>
			):(<div></div>)}
			
      {/* <div className="widgets-searchbar">
        <img id="search-icon" src={searchIcon}></img>
        <input placeholder="Search Twitter" type="text" />{" "}
      </div> */}


      <div className="widgets-whats-happening">
        <span>What's Happening</span>
        <TwitterTweetEmbed tweetId={"1595111211426684928"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="GeorgiaTech"
          options={{ height: 350 }}
        />

        <TwitterFollowButton screenName={"GeorgiaTech"} />
        <TwitterFollowButton screenName={"CoachBrentKey"} />
        <TwitterHashtagButton tag={"GeorgiaTech"} />
        <TwitterHashtagButton tag={"TogetherWeSwarm"} />
        <TwitterHashtagButton tag={"GoJackets"} />
      </div>
      <div className="widgets-who-to-follow">
        <span>Who to follow</span>
        <AccountDisplay
          accountIconLink={"https://i.imgur.com/LQdvWD2.png"}
          name="Georgia Tech"
          username="@GeorgiaTech"
        />
        <AccountDisplay
          accountIconLink={"https://i.imgur.com/THvbaQC.png"}
          name="Coach Brent Key"
          username="@CoachBrentKey"
        />
      </div>
    </div>
  );
}

export default WidgetsSidebar;
