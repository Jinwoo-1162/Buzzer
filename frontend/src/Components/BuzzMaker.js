/*
This file is a WIP and currently it does nothing
I was trying to make it display fake tweets on the Homepage
*/

import React from "react";
import "../CSS/BuzzMaker.css";
import DefaultTwitterpfp from "../Images/DefaultTwitterpfp.png";
import "../CSS/BuzzMaker.css";
function BuzzMaker(props) {
  // const { text } = props;
  // return (
  //   <div className={`TweetMaker`}>
  //     <h2>{text}</h2>
  //   </div>
  // );

  return (
    <div className="Buzz">
      <div className="main-buzz">
        <div className="avatar">
          <img id="profile" src={DefaultTwitterpfp} alt="" />
        </div>
        <div className="text-content">
          <h1>Username</h1>
          <p>Body</p>
        </div>
      </div>
    </div>

  );
}

export default BuzzMaker;
