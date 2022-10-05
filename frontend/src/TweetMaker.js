import React from "react";
import "./TweetMaker.css";

function SidebarMaker(props) {
  const { user, dateCreated, text } = props;
  return (
    <div className={`TweetMaker`}>
      <h2>{text}</h2>
    </div>
  );
}

export default TweetMaker;
