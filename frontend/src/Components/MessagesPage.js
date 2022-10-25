import Sidebar from "../Components/Sidebar";
import "../CSS/MessagesInbox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGear } from "@fortawesome/free-solid-svg-icons";

export function MessagesPage() {
  return (
    <div className="messages-page">
      <Sidebar />
      <div className="compose-column">
        <div className="messages-row">
          <h2>Messages</h2>
          <div className="message-icons">
            <div>
              <button>
                <FontAwesomeIcon icon={faGear} />
              </button>
              <button>
                <FontAwesomeIcon icon={faEnvelope} />
              </button>
            </div>
          </div>
        </div>
        <h1>Welcome to your inbox!</h1>
        <p>
          Drop a line, share Tweets and more with private conversations between
          you and others on Twitter.
        </p>
        <button className="text-button">Write a message</button>
      </div>
      <div className="select-message">
        <div>
          <h1>Select a message</h1>
          <p>
            Choose from your existing conversations, start a new one, or just
            keep swimming.
          </p>
          <button className="text-button">New message</button>
        </div>
      </div>
    </div>
  );
}
