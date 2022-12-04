const Favourites = () => {
  return (
    <div className="outer-container">
      <div className="listings-container">
        <p className="owner-name">Pet owner name</p>
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
          <button className="remove-fav-btn" id="removefav">
            REMOVE
          </button>
          <button className="more-info-btn" id="moreinfo">
            MORE INFO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Favourites;
