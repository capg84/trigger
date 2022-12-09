import "../Assets/Styles/advice.css";

const adviceCard = ({ advices }) => {
  return (
    <div className="advice-container">
      {advices.map((advice) => (
        <section className="advice-item">
          <div className="advice-image">
            <img src={advice.image} alt={advice.title}></img>
          </div>
          <div className="advice-text-el">
            <h3 className="advice-title">{advice.title}</h3>
            <p className="advice-description">{advice.description}</p>
          </div>
          <div className="advice-links">
            <a
              href={advice.liveUrl}
              className="btn"
              style={{ backgroundColor: "rgb(173, 121, 64)", color: "white" }}
              roleName="button"
              rel="noreferrer"
              target="_blank"
            >
              Visit Site
            </a>
          </div>
        </section>
      ))}
    </div>
  );
};

export default adviceCard;