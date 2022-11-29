import "../CSS/NotificationsHeader.css";
import SearchBox from "./SearchBox";
function NotificationsHeader(props) {
  return (
    <div>
      <SearchBox init=""/>
      <ul class="nav-list">
        <li class="nav-item"><a class={props.pageName=="all"?"is-selected":"not-selected"} href="/Notifications">All</a></li>
        <li class="nav-item"><a class={props.pageName=="verfied"?"is-selected":"not-selected"} href="Verified">Verified</a></li>
      </ul>
    </div>
  );
}

export default NotificationsHeader;
