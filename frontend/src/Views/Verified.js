import NotificationsTweets from "../Components/NotificationsTweets";
import Profile1 from "../Images/girlpfp.jpeg";
import Profile4 from "../Images/frenchfries.webp";
import NotificationsHeader from "../Components/NotificationsHeader";
import Sidebar from "../Components/Sidebar";
import WidgetsSidebar from "../Components/WidgetsSidebar";
import "../CSS/Notifications.css";
function Notifications() {
  return (
    <div className="notifications">
      <Sidebar />
      <div className="notifications-page-header">
        <div className="notifications-page">
          <NotificationsHeader pageName="verified" />
          <h2>Verified Tweets</h2>
          <NotificationsTweets 
              accountIconLink = {Profile1}
              name="Suzy Ross ✅"
              tweetContent = "My latest album 'EveryDay' is out now on all platforms! Go listen to it NOW"
              username = "@suzyross "
              followIconLink= {<button>Follow</button>}
          />
          <NotificationsTweets 
              accountIconLink = {Profile4}
              name="Foodies4Life ✅"
              tweetContent = "(Yes or No): Pinneaple is a good pizza topping"
              username = "@foodies4life"
              followIconLink=   {<button>Follow</button>}
          />
          <NotificationsTweets 
              accountIconLink = {Profile1}
              name="Suzy Ross ✅"
              tweetContent = "New album dropping in 3 DAYS!!! 🎉"
              username = "@suzyross "
              followIconLink=   {<button>Follow</button>}
          />
          <NotificationsTweets 
              accountIconLink = {Profile4}
              name="Foodies4Life ✅"
              tweetContent = "Desert recipes 101: How to make red velvet cake 🍰 View the article in our bio!"
              username = "@foodies4life "
              followIconLink = {<button>Follow</button>}
          />
        </div>
      </div>
      <WidgetsSidebar />
    </div>
  );
}

export default Notifications;
