import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { COMMENT_PET } from '../../Utils/mutations'
import Auth from '../../Utils/auth';
import "../../Assets/Styles/pet.css";

const CommentForm = ({ petId }) => {
    const [commentBody, setCommentBody] = useState('');
  
  
    const [addComment, { error }] = useMutation(COMMENT_PET);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const { data } = await addComment({
          variables: {
            petId,
            commentBody,
            commenter: Auth.getProfile?.data?._id
          },
        })

        setCommentBody({
            commentBody: ''
        });
      } catch (err) {
        console.error(err);
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      if (name === 'commentBody' && value.length <= 280) {
        setCommentBody(value);
      }
    };
    console.log('commentBody', commentBody)
    return (
      <div>
  
        {Auth.loggedIn() ? (
          <>
          <Form onSubmit={handleFormSubmit}>
            <InputGroup>
            <Button 
            type="submit"
            style={{ backgroundColor: "#AD7940", width: "fit-content"}} 
            className="comment-button">
                ENTER COMMENT
                </Button>
            <Form.Control as="textarea" 
            aria-label="With textarea"
            name='commentBody'
            onChange={handleChange}
            value={commentBody}
             />
            </InputGroup>
           </Form>
          </>
        ) : (
          <div>

          </div>
        )}
      </div>
    );
  };
  
  export default CommentForm;