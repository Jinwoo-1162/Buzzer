import ExploreHeader from "../Components/ExploreHeader";
import Sidebar from "../Components/Sidebar";
import TrendingMaker from "../Components/TrendingMaker";
import "../CSS/Explore.css";
function Trending() {
  return (
    <div className="explore">
      <Sidebar />
      <div className="explore-page">
        <ExploreHeader pageName="trending"/>
        <TrendingMaker rank = "1"/>
        <TrendingMaker rank = "2"/>
        <TrendingMaker rank = "3"/>
      </div>
    </div>
  );
}

export default Trending;
