/*
This file is a WIP and currently it does nothing
I was trying to make it display fake tweets on the Homepage
*/

import React from "react";
import "../CSS/TweetMaker.css";

function TweetMaker(props) {
  const { text } = props;
  return (
    <div className={`TweetMaker`}>
      <h2>{text}</h2>
    </div>
  );
}

export default TweetMaker;
