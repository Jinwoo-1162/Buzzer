import Sidebar from "../Components/Sidebar";
import "../CSS/Explore.css";
import SearchBox from "../Components/SearchBox";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import DefaultProfile from "../Images/DefaultTwitterpfp.png";
import NewTweet from "../Components/NewTweet";
import WidgetsSidebar from "../Components/WidgetsSidebar";
function Results() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");
  // const [query, setQuery] = useState("");
  const [allTweets, setAllTweets] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // let tweetsFilteredByNameResponse = await axios.get(`http://localhost:8080/tweet/user/${q}`);
    // let filteredTweets = tweetsFilteredByNameResponse.data;
    let tweetsFilteredByKeywordResponse = await axios.get(
      `http://localhost:8080/tweet/${query}`
    );
    // filteredTweets.concat(tweetsFilteredByKeywordResponse.data);
    setAllTweets(tweetsFilteredByKeywordResponse.data);
  };
  return (
    <div className="explore">
      <Sidebar />
      <div className="explore-page-header">
        <div className="explore-page">
          <SearchBox init={query} />
          {allTweets.map((ele) => {
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
          <h1>
            {allTweets.length === 0 ? `Found Nothing for "${query}"` : ""}
          </h1>
        </div>
      </div>
    <WidgetsSidebar />
    </div>
  );
}

export default Results;
