import { Button } from "bootstrap";
import "../Assets/Styles/advice.css";

const adviceCard = ({ advices }) => {
  return (
    <main >

      {advices.map((advice) => (
        <card className="advice-card">
          <div className="image-div">
            <img className="image" src={advice.image} alt={advice.title}></img>
          </div>
          <div className="text-div">
            <div className="title-div">
              <h3>{advice.title}</h3>
            </div>

            <div className="description-div">
              <p>{advice.description}</p>
            </div>

            <div className="advise-button-div">
              <button className="advise-button"><a href={advice.liveUrl}>VISIT SITE</a></button>
            </div>
          </div>
        </card>
      ))}

    </main>
  );
};

export default adviceCard;

/* <section className="advice-section"> */
{/* <div className="advice-container">
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
        className="btn advice-btn"
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
</div> */}