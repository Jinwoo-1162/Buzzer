import React from "react";
import "../CSS/NotificationsTweets.css";


function NotificationsTweets({ accountIconLink, tweetContent, name, username, followIconLink }) {
    return (
      <div className="notificationsAccountContainer">
        <div className="notificationsAccountIconContainer"> 
            <img className= "notificationsAccountIcon"src={accountIconLink} alt="icon"></img>
        </div>
        <div className="title">
            <p><strong>{"Recent tweet from " + name + " "}</strong></p>
            <div className = "username">
            <p>{username}</p>
            </div>           
            <span>{tweetContent}</span> 
        </div>
        <div className="followIconContainer">
            {followIconLink} 
         </div>
      </div>
    );
  }
  
  export default NotificationsTweets;