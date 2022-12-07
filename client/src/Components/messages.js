import "../Assets/Styles/dashboard.css";
import { useQuery, useMutation, useLazyQuery } from '@apollo/client';
import { Image } from 'react-bootstrap'
import { MESSAGES, GET_MESSAGES, MY_PROFILE} from '../Utils/queries'
import { SEND_MESSAGE } from "../Utils/mutations";
import Auth from '../Utils/auth';
import avatar from "../Assets/Images/message.jpg.webp";
import collect from 'collect.js';
import { useState, useEffect } from "react";

const Messages = () => {
  const { loading, data } = useQuery(MESSAGES);
  const messagesData = data?.messages || [];

  const [selectedUser, setSectedUser] = useState('');
  const [getmessages, {loading: messagesLoading, data: messageData}] = useLazyQuery(GET_MESSAGES);
  useEffect(() => {
    if(selectedUser) {
      getmessages({variables: {from: selectedUser}})
    }
  }, [selectedUser])
  if(messageData) console.log(messageData);

  if (loading) {
    return <h2>LOADING...</h2>;
  }
  return (
    <div className="message-outer-container row">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div style={{width: 280}}>
            {messagesData.map((message) => {
              return (
              <div className="user-container col" style={{width: '120%', marginRight: '15%'}} key={message.from._id} onClick= {() => setSectedUser(message.from._id)}>
                <div className="single-user row"
                style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                  <Image src={avatar} roundedCircle className="mr-2 col"
                  style={{ width: 30, height: 90, objectFit: 'cover' }}
                  />
                  <div className="col-7">
                  <p style={{display: 'inline', width: '100%'}}>{message.from.fullname}</p>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        )}
      <div className="message-container col">
        <div className="messages">
          <div className="username-chat">
            <p>Pet owner username</p>
          </div>
          <div className="user-message">
            {messageData && messageData.getmessages.length > 0 ? (
              messageData.getmessages.map(message => (
                <p key={message._id}>{message.messageText}</p>
              ))
            ) : <p>You have no messages</p>}
          </div>
          <div className="date-created">
            <p>Date created here</p>
          </div>
        </div>
        <div className="send-message">
          <input type="text" id="message" name="message" />
          <input type="submit" id="send-btn" value="SEND" />
        </div>
      </div>
    </div>
  );
};

export default Messages;
