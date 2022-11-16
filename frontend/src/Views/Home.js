import React, {useEffect, useState} from "react";
import "../CSS/Home.css";
import Sidebar from "../Components/Sidebar.js";
import Timeline from "../Components/Timeline";
import axios from "axios";
function Home() {
  const [allTweets, setAllTweets] = useState([]);
  useEffect(() => {
    fetchData();
  }, [])
  
  const fetchData = async () => {
    let allTweetsResponse = await axios.get("http://localhost:8080/tweet");
    setAllTweets(allTweetsResponse.data);
  }
  return (
    <div className="home">
      <Sidebar />
      <div className="home_header">
        <Timeline tweetsList={allTweets}/>
      </div>
      <div className="post"></div>
    </div>
  );
}

export default Home;
