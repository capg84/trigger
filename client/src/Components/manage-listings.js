import "../Assets/Styles/dashboard.css";
import { useParams, Link } from "react-router-dom";

const ManageListing = () => {
  return (
    <div className="outer-container">
      <div className="listings-container">
        <article className="listing-item">
          <div className="listing-image">
            <p>pet image here</p>
          </div>
          <div className="listing-info">
            <p>Pet name</p>
            <p>Location</p>
            <p>Age</p>
            <p>Gender</p>
          </div>
        </article>
        <div className="listing-buttons">
          <Link to="/edit/:id">
            <button className="edit-btn" id="edit">
              EDIT
            </button>
          </Link>
          <Link to="/delete/:id">
          <button className="del-btn" id="delete">
            DELETE
          </button>
          </Link>
        </div>
      </div>

      <div className="listings-container">
        <article className="listing-item">
          <div className="listing-image">
            <p>pet image here</p>
          </div>
          <div className="listing-info">
            <p>Pet name</p>
            <p>Location</p>
            <p>Age</p>
            <p>Gender</p>
          </div>
        </article>
        <div className="listing-buttons">
          <button className="edit-btn" id="edit">
            EDIT
          </button>
          <button className="del-btn" id="delete">
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageListing;
