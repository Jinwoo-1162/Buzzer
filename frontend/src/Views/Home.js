import Navbar from "../Components/Navbar";
import Tweet from "../Components/Tweet";
import "../CSS/Home.css";
import "../CSS/Views.css";

function Home(props) {
  const tweet1 = {
    username: "Jinwoo Park",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    text: "hello world",
  };

  const tweet2 = {
    username: "Steve Meme",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    text: "My name is Steve",
  };

  const tweet3 = {
    username: "Sample Name",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    text: "Free me from this terrifying existence",
  };

  return (
    <div className="home">
      <Navbar />
      <h2 className="header">Home Page</h2>
      <p>This should contain information about your home page</p>
      <div className="tweet-feed">
        <Tweet tweetInfo={tweet1} />
        <Tweet tweetInfo={tweet2} />
        <Tweet tweetInfo={tweet3} />
      </div>
    </div>
  );
}

export default Home;
