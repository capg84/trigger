import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useQuery } from '@apollo/client';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";
import Pet from "../Components/pet";
import Species from "../Components/species"
import { SEARCH_PETS } from '../Utils/queries';



const AllPets = () => {

  const { loading, data } = useQuery(SEARCH_PETS);
  const allBreeds = data?.allPets || [];



  return (

    <main>
      <div>
        <div className="currentPageIdentifier">
          <p style={{ color: "#AD7940", padding: "2vh", fontSize: "4vh" }}>
            <a style={{ color: "#AD7940", padding: "2vh", fontSize: "4vh" }} className="item-link" href="/">HOME</a>/ REHOME A PET</p>
        </div>
      </div>

      <div className='all-pets'>
        <div style={{ width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Link to={`/pets/Cat`}>
              <Button style={{ backgroundColor: "#AD7940", color: "#f2faf5", width: "9rem", margin: "5vh" }}>CATS</Button>
            </Link>
            <Link to={`/pets/Dog`}>
              <Button style={{ backgroundColor: "#AD7940", color: "#f2faf5", width: "9rem", margin: "5vh" }}>DOGS</Button>
            </Link>
            <Link to={`/pets/Rabbit`}>
              <Button style={{ backgroundColor: "#AD7940", color: "#f2faf5", width: "9rem", margin: "5vh" }}>RABBITS</Button>
            </Link>
            <Link to={`/pets/Horse`}>
              <Button style={{ backgroundColor: "#AD7940", color: "#f2faf5", width: "9rem", margin: "5vh" }}>HORSES</Button>
            </Link>
            <Link to={`/pets/Bird`}>
              <Button style={{ backgroundColor: "#AD7940", color: "#f2faf5", width: "9rem", margin: "5vh" }}>BIRDS</Button>
            </Link>
            <Link to={`/pets/Giunea pig`}>
              <Button style={{ backgroundColor: "#AD7940", color: "#f2faf5", width: "9rem", margin: "5vh" }}>GUINEA PIGS</Button>
            </Link>
            <Link to={`/pets/Other`}>
              <Button style={{ backgroundColor: "#AD7940", color: "#f2faf5", width: "9rem", margin: "5vh" }}>OTHER</Button>
            </Link>
          </div>
        </div>

        <section style={{ width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
          {allBreeds && allBreeds.map((pet) => (
            <Card style={{ display: "flex", backgroundColor: "#C3965F", width: '27rem', height: "15rem", margin: "5vh" }}>
              <div style={{ display: "flex" }}>
                <div>

                  <img style={{
                    display: "flex", border: "solid black 1px", width: '10rem', height: "14rem",
                    margin: "0.5rem", borderRadius: "10px"
                  }} alt="pet" source={pet.image} />
                </div>
                <div style={{ padding: "1rem" }}>
                  <h6 style={{ color: "#f2faf5", padding: "1vh", fontSize: "15px" }}>NAME: <span>{pet.name}</span></h6>
                  <h6 style={{ color: "#f2faf5", padding: "1vh", fontSize: "15px" }}>AGE: <span>{pet.age}</span></h6>
                  <h6 style={{ color: "#f2faf5", padding: "1vh", fontSize: "15px" }}>GENDER: <span>{pet.gender}</span></h6>
                  <h6 style={{ color: "#f2faf5", padding: "1vh", fontSize: "15px" }}>LOCATION: <span>{pet.city}</span></h6>
                  <Link to={`/pets/${pet._id}`}>
                    <Button style={{ backgroundColor: "#72552D", color: "#f2faf5", padding: "1vh", fontSize: "15px" }} variant="primary"
                      value={pet._id}>MORE INFO</Button>
                  </Link>
                </div>
                <Routes>
                  <Route path="/:petId" element={<Pet singlePet={pet} />} />
                </Routes>
              </div>
            </Card>
          ))}
        </section>


        <div style={{ width: "100%", textAlign: "center" }}>
          <Button style={{
            backgroundColor: "#72552D", color: "#f2faf5", padding: "1vh",
            fontSize: "15px", width: "10rem", margin: "50px"
          }} variant="primary">SEE MORE PETS</Button>
        </div>

      </div>
    </main>

  );
};


export default AllPets;
