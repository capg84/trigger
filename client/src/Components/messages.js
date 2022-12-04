import '../Assets/Styles/dashboard.css';

const Messages = () => {
  return (
    <div className="message-outer-container">
      <div className="user-container">
        <div>
          <p>Username</p>
        </div>
        <div>
          <p>Username</p>
        </div>
        <div>
          <p>Username</p>
        </div>
        <div>
          <p>Username</p>
        </div>
      </div>
      <div className="message-container">
        <div className="username-chat">
          <p>Pet owner username</p>
        </div>
        <div className="user-message">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam accusantium
            doloremque laudantium, totam rem aperiam.
          </p>
        </div>
        <div className="date-created">
          <p>Date created here</p>
        </div>
        <div className="message-button">
          <button className="send-btn" id="send">
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
