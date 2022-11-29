import "../CSS/Activity.css";
import NewTweet from "./NewTweet";

function Timeline() {
  return (
    <div class="timeline">
      <NewTweet
        pfp={"https://yellowjackedup.com/wp-content/uploads/getty-images/2017/07/1190021957.jpeg"}
        username={"Buzz"}
        text="Tweet 3"
      />
      <NewTweet
        pfp={"https://yellowjackedup.com/wp-content/uploads/getty-images/2017/07/1190021957.jpeg"}
        username={"Buzz"}
        text="Tweet 2"
      />

      <NewTweet
        pfp={"https://yellowjackedup.com/wp-content/uploads/getty-images/2017/07/1190021957.jpeg"}
        username={"Buzz"}
        text="Tweet 1"
      />
    </div>
  )
}

export default Timeline;
