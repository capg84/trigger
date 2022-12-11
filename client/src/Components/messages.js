import "../assets/styles/dashboard.css";
import { useQuery, useMutation, useLazyQuery } from '@apollo/client';
import { Image, Form } from 'react-bootstrap'
import { MESSAGES, GET_MESSAGES} from '../Utils/queries'
import { SEND_MESSAGE } from "../Utils/mutations";
import Auth from '../Utils/auth'
import avatar from "../assets/images/message.jpg.webp";
import { useState, useEffect } from "react";
import EachMessage from './eachmessage';

const Messages = () => {
  const { loading, data } = useQuery(MESSAGES);
  const messagesData = data?.messages || [];
  const [selectedUser, setSelectedUser] = useState('');
  // eslint-disable-next-line
  const [getmessages, {loading: messagesLoading, data: messageData}] = useLazyQuery(GET_MESSAGES);
  const [messageFormData, setmessageFormData] = useState({ to: selectedUser, messageText: '' });
  // eslint-disable-next-line
  const [sendMessage, { error }] = useMutation(SEND_MESSAGE);
 
  useEffect(() => {
    if(selectedUser) {
      getmessages({variables: {from: selectedUser}})
    }
  }, [getmessages, selectedUser])

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setmessageFormData({ ...messageFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();



    try {
      console.log('form data:', messageFormData)
      // eslint-disable-next-line
      const { data: sendData } = await sendMessage({
        variables: { ...messageFormData },
      });
    }
    catch (err) {
      console.error(err);
    }

    setmessageFormData({
      to: selectedUser,
      messageText: ''
    });
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  const formatDataOfUsers = () => {
    const tracker = {};
    const listOfUsers = [];// [{_id:, name}, ...]
    for (let i = 0; i < messagesData.length; i++) {
      const data = messagesData[i];
      const name = data.from.fullname;
      const _id = data.from._id;
      if(_id in tracker) {
        continue;
      } else {
        tracker[_id] = true;
        listOfUsers.push({_id, name});
      }
      
    }
    return listOfUsers;
  }
  return (
    <div className="message-outer-container row">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div style={{width: 280}}>
            {formatDataOfUsers().map((user) => {
              
              return (
              <div className='user-container col'
              style={{width: '120%', marginRight: '15%'}} key={user._id} 
              onClick= {() => {
                console.log('id:', user._id)
                setSelectedUser(user._id);
                console.log('selected:', selectedUser)
              }}>
                <div className="single-user row"
                style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                  <Image src={avatar} roundedCircle className="mr-2 col"
                  style={{ width: 30, height: 90, objectFit: 'cover' }}
                  />
                  <div className="col-7">
                  <p style={{display: 'inline', width: '100%'}}>{user.name}</p>
                  </div>
                </div>
              </div>
              );
            })
            }
          </div>
        )}
      <div className="message-container col">
        <div className="messages-content">
        {messageData && messageData.getmessages.length > 0 ? (
          messageData.getmessages.map(message => (
            <div style={{paddingBottom: '5%'}} className={ message.from._id === Auth.getProfile()?.data?._id ?'d-flex right': 'd-flex left'}>
              <EachMessage key={message._id} message = {message}/>
            </div>
          ))
        ) : <p>You are now connected</p>}
        </div>
        <Form className="meesage-form" onSubmit={handleFormSubmit}>
          <Form.Group className="send-message" >
            <Form.Control 
            type="text" 
            id="message" 
            name="messageText" 
            value={messageFormData.messageText}
            onChange={handleInputChange}
          />
        </Form.Group>
        <input type="submit" id="send-btn" value="SEND" />
        </Form>
      </div>
    </div>
  );
};

export default Messages;
