import React from 'react';
import Auth from '../../Utils/auth';
import { Button } from 'react-bootstrap';
import "../../Assets/Styles/pet.css";
import { useMutation } from '@apollo/client';
import { REMOVE_COMMENT } from '../../Utils/mutations';
import { useParams } from 'react-router-dom';

const CommentList = ({ comments = [] }) => {
  const [removeComment, { error }] = useMutation(REMOVE_COMMENT)
  const { petId } = useParams();
  console.log('pet', petId)
  const handleRemoveComment = async (commentId) => {
    console.log('comment', commentId)
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removeComment({
        variables: { petId, commentId },
      });
      window.location.reload(); 

    } catch (err) {

      console.error(err);
    }
  
  };
    
    return (
      <>
        <div className="reverse">
        {comments.length > 0 ?(
          comments.map(comment => (
        <div className="saved-comments">
        <div className="comment-header">
          <h6>{comment.dateCreated}</h6>
          <div className="d-flex">
            <h6>{comment.commenter.fullname}</h6>
            {Auth.loggedIn ? ( 
            <div>
              <span id='deletebtn' class="material-symbols-outlined"
              onClick={() => handleRemoveComment(comment._id)}
              >delete</span>
              </div>
            ) : (<div></div>)}
          </div>
          
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
      </>
    );
  };
  
  export default CommentList;