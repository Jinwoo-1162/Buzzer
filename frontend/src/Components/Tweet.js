import "../CSS/Tweet.css";

function Tweet(props) {
  return (
    <div className="tweet-box">
      <div className="profile-content">
        <img
          src={props.tweetInfo.image}
          alt="tweet-profile pic"
          className="profile-pic"
        />
        <span className="tweet-username">{props.tweetInfo.username}</span>
      </div>
      <span className="tweet-content">{props.tweetInfo.text}</span>
    </div>
  );
}

export default Tweet;
