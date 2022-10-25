import BuzzMaker from "../Components/BuzzMaker";
import ExploreHeader from "../Components/ExploreHeader";
import Sidebar from "../Components/Sidebar";
import "../CSS/Explore.css";
function Explore() {
  return (
    <div className="explore">
      <Sidebar />
      <div className="explore-page">
        <ExploreHeader pageName="foryou" />
        <BuzzMaker />
      </div>
    </div>
    
  );
}

export default Explore;