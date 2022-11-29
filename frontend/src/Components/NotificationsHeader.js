import "../CSS/NotificationsHeader.css";
function NotificationsHeader(props) {
  return (
    <div>
      <ul class="nav-list">
        <li class="nav-item"><a class={props.pageName=="all"?"is-selected":"not-selected"} href="//Notifications">All</a></li>
        <li class="nav-item"><a class={props.pageName=="verified"?"is-selected":"not-selected"} href="/Explore/Trending">Verified</a></li>
        <li class="nav-item"><a class={props.pageName=="mentions"?"is-selected":"not-selected"} href="/Explore/Trending">Mentions</a></li>
      </ul>
    </div>
  );
}

export default NotificationsHeader;