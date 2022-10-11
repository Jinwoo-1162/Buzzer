import Sidebar from "../Components/Sidebar";
import ExploreNavBar from "../Components/ExpoloreNavBar";
function Explore() {
  return (
    // how to navigate multiple sub pages inside a single page?
    // how to style?
    <div className="Explore">
      <Sidebar />
      <ExploreNavBar />
    </div>
  );
}

export default Explore;