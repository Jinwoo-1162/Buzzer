import "../CSS/Navbar.css";

function Navbar(props) {
  return (
    <div className="navbar">
      <a href="/" className="page-link">
        <div className="nav-div">Home</div>
      </a>
      <a href="/cookie" className="page-link">
        <div className="nav-div">Cookie</div>
      </a>
      <a href="/quote" className="page-link">
        <div className="nav-div">Quote</div>
      </a>
      <a href="/bad" className="page-link">
        <div className="nav-div">404</div>
      </a>
    </div>
  );
}

export default Navbar;
