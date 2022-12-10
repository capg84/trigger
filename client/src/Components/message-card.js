import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../Assets/Styles/message-card.css"
import { useParams } from 'react-router-dom';
import { useMutation} from '@apollo/client';
import { SEND_MESSAGE } from "../Utils/mutations";
import { useState } from 'react';


export default function MessageCard() {
    const { userId } = useParams();

    const [messageText, setMessageText] = useState('');
    // eslint-disable-next-line
    const [sendMessage, { error }] = useMutation(SEND_MESSAGE);

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        if (name === 'messageText') {
          setMessageText(value);
        }
      };
      const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
            // eslint-disable-next-line
          const { data } = await sendMessage({
            variables: {
              to: userId,
              messageText,
            },
          });
          
            setMessageText({
              messageText: ''
            });
          
        } catch (err) {
          console.error(err);
        }
      };
      console.log('messageText', messageText)
    return (
        <main className='message-card-main'>
            
            <Form className='message-card-form' onSubmit={handleFormSubmit}>

                <Form.Group >
                    <Form.Label className='from-label'>MESSAGE:</Form.Label>
                    <textarea 
                    className="form-control input" 
                    placeholder='ENTER MESSAGE' 
                    onChange={handleChange}
                    name="messageText"
                    type="message"/>
                </Form.Group>
                <div className='button-div'>
                    <Button
                    type='submit'
                    >
                        SEND MESSAGE
                    </Button>
                </div>
            </Form>
        </main>
    );
}
