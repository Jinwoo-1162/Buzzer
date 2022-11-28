import NewTweet from "../Components/NewTweet";
import ExploreHeader from "../Components/ExploreHeader";
import Sidebar from "../Components/Sidebar";
import WidgetsSidebar from "../Components/WidgetsSidebar";
import "../CSS/Explore.css";
function Explore() {
  return (
    <div className="explore">
      <Sidebar />
      <div className="explore-page-header">
        <div className="explore-page">
          <ExploreHeader pageName="foryou" />
        </div>
      </div>
      <WidgetsSidebar />
    </div>
  );
}

export default Explore;
