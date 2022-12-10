import "../Assets/Styles/index.css"


const About = () => {
  return (
    <div>
      <div className="currentPageIdentifier">
        <p style={{ color: "#AD7940", padding: "2vh", fontSize: "30px" }}>
          <a style={{ color: "#AD7940", padding: "2vh", fontSize: "30px" }} className="item-link" href="/">HOME</a>/ ABOUT</p>
      </div>

      <main className="about-main">

        <div className="about-trigger">
          <div className="trigger-header">
            <h1 >TRIGGER</h1>
          </div>

          <div>
            <p>Created in loving memory of Trigger who sadly passed away in November 2022.</p>
            <p> Trigger was origanlly found living on tram tracks in South Manchester by South Manchester Cat Rehoming charity, he was badly injured with multiple 
              cuts over his body.</p>
            <p>He was nursed back to health in a foster home, then found his forever where he lived the rest of days as a happy cat.</p>
            <p>We decided to create a website to give pet owners who are sadly unable to keep their pets,
               a dedicated platform to find their pet a safe and loving new home. We hope this website will stop countless 
               pets being abandoned like Trigger was.</p>
          </div>
        </div>

      </main>

    </div>


  );
};

export default About;
