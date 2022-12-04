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
          <button className="edit-btn" id="edit">
            EDIT
          </button>
          <button className="del-btn" id="delete">
            DELETE
          </button>
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
