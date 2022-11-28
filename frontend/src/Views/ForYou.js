import NewTweet from "../Components/NewTweet";
import ExploreHeader from "../Components/ExploreHeader";
import Sidebar from "../Components/Sidebar";
import "../CSS/Explore.css";
function Explore() {
  return (
    <div className="explore">
      <Sidebar />
      <div className="explore-page-header">
        <div className="explore-page">
          <ExploreHeader pageName="foryou" />
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
          />
        </div>
      </div>
    </div>
  );
}

export default Explore;
