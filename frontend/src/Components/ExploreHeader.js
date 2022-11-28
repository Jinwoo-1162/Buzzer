import "../CSS/ExploreHeader.css";
import SearchBox from "./SearchBox";
function ExploreHeader(props) {
  return (
    <div>
      <SearchBox init=""/>
      <ul class="nav-list">
        <li class="nav-item"><a class={props.pageName=="foryou"?"is-selected":"not-selected"} href="/Explore">For You</a></li>
        <li class="nav-item"><a class={props.pageName=="trending"?"is-selected":"not-selected"} href="Trending">Trending</a></li>
      </ul>
    </div>
  );
}

export default ExploreHeader;