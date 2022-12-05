import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const AllPets = () => {
  return (

    <main>
      <div>
        <div className="currentPageIdentifier">
          <p style={{ color: "#AD7940", padding: "2vh", fontSize: "30px" }}>
            <a style={{ color: "#AD7940", padding: "2vh", fontSize: "30px" }} className="item-link" href="/">HOME</a>/ REHOME A PET</p>
        </div>
        <h1 style={{ marginLeft: "4vh", color: "#AD7940", fontSize: "30px" }} >SEARCH</h1>
      </div>


      <div style={{ width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <Button style={{ backgroundColor: "#AD7940", color: "#f2faf5", width: "9rem", margin: "5vh" }}>CATS</Button>
          <Button style={{ backgroundColor: "#AD7940", color: "#f2faf5", width: "9rem", margin: "5vh" }}>DOGS</Button>
          <Button style={{ backgroundColor: "#AD7940", color: "#f2faf5", width: "9rem", margin: "5vh" }}>RABBIT</Button>
          <Button style={{ backgroundColor: "#AD7940", color: "#f2faf5", width: "9rem", margin: "5vh" }}>HORSES</Button>
          <Button style={{ backgroundColor: "#AD7940", color: "#f2faf5", width: "9rem", margin: "5vh" }}>BIRDS</Button>
          <Button style={{ backgroundColor: "#AD7940", color: "#f2faf5", width: "9rem", margin: "5vh" }}>GUINEA PIGS</Button>
          <Button style={{ backgroundColor: "#AD7940", color: "#f2faf5", width: "9rem", margin: "5vh" }}>OTHER</Button>
        </div>
      </div>

      <section style={{ width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>

        <Card style={{ display: "flex", backgroundColor: "#C3965F", width: '27rem', height: "15rem", margin: "5vh" }}>
          <div style={{ display: "flex" }}>
            <div>
              <img style={{
                display: "flex", border: "solid black 1px", width: '10rem', height: "14rem",
                margin: "0.5rem", borderRadius: "10px"
              }} alt="pet" src="/" />
            </div>
            <div style={{ padding: "1rem" }}>
              <h6 style={{ color: "#f2faf5", padding: "1vh", fontSize: "15px" }}>NAME: <span></span></h6>
              <h6 style={{ color: "#f2faf5", padding: "1vh", fontSize: "15px" }}>AGE: <span></span></h6>
              <h6 style={{ color: "#f2faf5", padding: "1vh", fontSize: "15px" }}>GENDER: <span></span></h6>
              <h6 style={{ color: "#f2faf5", padding: "1vh", fontSize: "15px" }}>LOCATION: <span></span></h6>
              <Button style={{ backgroundColor: "#72552D", color: "#f2faf5", padding: "1vh", fontSize: "15px" }} variant="primary">MORE INFO</Button>
            </div>
          </div>
        </Card>
     
      </section>


      <div style={{width: "100%", textAlign: "center"}}>
          <Button style={{ backgroundColor: "#72552D", color: "#f2faf5", padding: "1vh", 
          fontSize: "15px", width: "10rem", margin: "50px" }} variant="primary">SEE MORE PETS</Button>
        </div>


    </main>

  );
};

export default AllPets;
