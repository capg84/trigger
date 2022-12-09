import React from 'react'
import "../Assets/Styles/dashboard.css";
import classNames from 'classnames'
import Auth from '../Utils/auth';

const EachMessage = ({message}) => {
  const user = Auth.getProfile()?.data?._id;
  const sent = message.from._id === user;
  const received = !sent;
  return (
    <div className='messages'>
        <div className="username-chat">
          <p>{message.from.fullname}</p>
        </div>
        <div className="user-message">  
            <div className="d-flex my-3">
                <div className={classNames('py-2 px-3 rounded-pill', {
                    'messageText': sent,
                    'messageReceived': received,
                })}>
                  <p style={{fontSize: '1.2rem'}} key={message._id}>{message.messageText}</p>
                </div>
            </div>
        </div>
        <div className="date-created" >
            <p>{message.dateCreated}</p>
        </div>
    </div>
  )
};

export default EachMessage