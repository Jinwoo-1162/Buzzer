import Navbar from "../Components/Navbar";
import "../CSS/Views.css";

function ErrorPage(props) {
  return (
    <div className="error">
      <Navbar />
      <h2>404 Page not found</h2>
      <p>You were routed to a page that does not exist</p>
    </div>
  );
}

export default ErrorPage;
