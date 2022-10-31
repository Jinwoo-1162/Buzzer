import React from "react";
import "../../CSS/Lists.css";


function DiscoverAccounts({ accountIconLink, title, name, username, followIconLink }) {
    return (
      <div className="accountContainer">
        <div className="accountIconContainer"> 
            <img className= "accountIcon"src={accountIconLink} alt="icon"></img>
        </div>
        <div className="title">
            <p><strong>{title}</strong></p>
            <span>{name}</span><span>          {username}</span> 
        </div>
        <div className="followIcontainer">
            {followIconLink} 
         </div>
      </div>
    );
  }
  
  export default DiscoverAccounts;
  


// for the individual lists
//     <div className="newtweet"> // this will go for each 
{/* <div className="newtweet_avatar">
<img id="newtweet_pfp" src={pfp} alt="Profile"></img>
</div>
<div className="newtweet_body">
<div className="newtweet_user">
  <div className="newtweet_userInfo">
    <h3>{username}</h3>
  </div>
  <div className="newtweet_tweetMessage">
    <p>{text}</p>
  </div> */}