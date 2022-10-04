import Navbar from "../Components/Navbar";
import "../CSS/Views.css";

function Home(props) {
  return (
    <div className="home">
      <Navbar />
      <h2 className="header">Home Page</h2>
      <p>This should contain information about your home page</p>
    </div>
  );
}

export default Home;
