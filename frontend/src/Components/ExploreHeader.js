import "../CSS/ExploreHeader.css";
function ExploreHeader(props) {
  return (
    <div>
      <div class="explore-searchbox">
        <label className="search-box">
          <span class="icon">🔎</span>
          <input type="search" placeholder="search"/>
        </label>
      </div>
      <ul class="nav-list">
        <li class="nav-item"><a class={props.pageName=="foryou"?"is-selected":"not-selected"} href="/Explore">For You</a></li>
        <li class="nav-item"><a class={props.pageName=="trending"?"is-selected":"not-selected"} href="Trending">Trending</a></li>
      </ul>
    </div>
  );
}

export default ExploreHeader;