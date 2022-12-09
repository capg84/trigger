import React from "react";
import "../Assets/Styles/pet.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Auth from '../Utils/auth';

const Comment = ({pet}) => {
    <div>
            {Auth.loggedIn() ? (
      <div>
        <div>
          <InputGroup>
            <Button style={{ backgroundColor: "#AD7940", width: "fit-content"}} className="comment-button">ENTER COMMENT</Button>
            <Form.Control as="textarea" aria-label="With textarea" />
          </InputGroup>
        </div>
        <div className="reverse">
        {pet.comments.length > 0 ?(
          pet.comments.map(comment => (
        <div className="saved-comments">
          <div className="comment-header">
            <h6>{comment.dateCreated}</h6>
            <h6>{comment.commenter.fullname}</h6>
            <span class="material-symbols-outlined">delete</span>
          </div>
          <div className="comment-text">
            <p>{comment.commentBody}</p>
          </div>
        </div>
          ))
        ) : (
          <div className="saved-comments">

          </div>
        )}
        </div>
      </div>
    ) : (
      <div className="reverse">
      {pet.comments.length > 0 ?(
        pet.comments.map(comment => (   
      <div className="saved-comments">
        <div className="comment-header">
          <h6>{comment.dateCreated}</h6>
          <h6>{comment.commenter.fullname}</h6>
        </div>
        <div className="comment-text">
          <p>{comment.commentBody}</p>
        </div>
      </div>
        ))
      ) : (
        <div className="saved-comments">

        </div>
      )}
    </div>
    )}
    </div>
};

export default Comment;