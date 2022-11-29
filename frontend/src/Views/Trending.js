import ExploreHeader from "../Components/ExploreHeader";
import Sidebar from "../Components/Sidebar";
import WidgetsSidebar from "../Components/WidgetsSidebar";
import TrendingMaker from "../Components/TrendingMaker";
import "../CSS/Explore.css";
function Trending() {
  return (
    <div className="explore">
      <Sidebar pageName="Explore"/>
      <div className="explore-page-header">
        <div className="explore-page">
          <ExploreHeader pageName="trending" />
          <TrendingMaker rank="1" />
          <TrendingMaker rank="2" />
          <TrendingMaker rank="3" />
        </div>
      </div>
      <WidgetsSidebar />
    </div>
  );
}

export default Trending;
