import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../Assets/Styles/message-card.css"

export default function MessageCard() {
    return (
        <main className='message-card-main'>
            
            <Form className='message-card-form'>

                <Form.Group >
                    <Form.Label className='from-label'>MESSAGE:</Form.Label>
                    <textarea className="form-control input" placeholder='ENTER MESSAGE' type="message"/>
                </Form.Group>
                <div className='button-div'>
                    <Button>SEND TO: <span>{}</span></Button>
                </div>
            </Form>
        </main>
    );
}
