import React from 'react';
import Auth from '../../Utils/auth';
import "../../Assets/Styles/pet.css";

const CommentList = ({ comments = [] }) => {
    // if (!comments.length) {
    //   return <h3>No Comments Yet</h3>;
    // }
    
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
            <div><span class="material-symbols-outlined">delete</span></div>
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