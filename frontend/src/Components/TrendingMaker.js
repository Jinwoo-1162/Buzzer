import "../CSS/TrendingMaker.css";
function TrendingMaker(props) {
  return (
    <div className="trending-maker">
      <h4>
        #{props.rank} • trending
      </h4>
      <h1>
        Breaking News
      </h1>
    </div>
  );
}

export default TrendingMaker;