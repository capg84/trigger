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
import { SEARCH_PETS, SEARCH_PET_SPECIES } from '../Utils/queries';



const AllPets = () => {

  const { loading, data } = useQuery(SEARCH_PETS);
  let allBreeds = data?.allPets || [];

  
  
  const HandleSpecies = (e) => {
    const aninalType = e.target.value;
    console.log(aninalType )
    
    const { loading, data } = useQuery(SEARCH_PET_SPECIES,{
      variables: {species: aninalType}
    });
    allBreeds = data?.speciesPet || [];

  };


  return (

    <main>
      <div>
        <div className="currentPageIdentifier">
          <p style={{ color: "#AD7940", padding: "2vh", fontSize: "4vh" }}>
            <a style={{ color: "#AD7940", padding: "2vh", fontSize: "4vh" }} className="item-link" href="/">HOME</a>/ REHOME A PET</p>
        </div>
        {/* <h1 style={{ marginLeft: "4vh", color: "#AD7940", fontSize: "30px" }} >SEARCH</h1> */}
      </div>

<div className='all-pets'>
      <div style={{ width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <Button value="Cat" onClick={(e) => HandleSpecies(e)}
          style={{ backgroundColor: "#AD7940", color: "#f2faf5", width: "9rem", margin: "5vh" }}>CATS</Button>
          <Button value="Dog" onClick={(e) => HandleSpecies(e)} 
          style={{ backgroundColor: "#AD7940", color: "#f2faf5", width: "9rem", margin: "5vh" }}>DOGS</Button>
          <Button value="Rabbit" onClick={(e) => HandleSpecies(e)}
          style={{ backgroundColor: "#AD7940", color: "#f2faf5", width: "9rem", margin: "5vh" }}>RABBITS</Button>
          <Button value="Horse" onClick={(e) => HandleSpecies(e)}
          style={{ backgroundColor: "#AD7940", color: "#f2faf5", width: "9rem", margin: "5vh" }}>HORSES</Button>
          <Button value="Bird" onClick={(e) => HandleSpecies(e)}
          style={{ backgroundColor: "#AD7940", color: "#f2faf5", width: "9rem", margin: "5vh" }}>BIRDS</Button>
          <Button value="Guinea pig" onClick={(e) => HandleSpecies(e)}
          style={{ backgroundColor: "#AD7940", color: "#f2faf5", width: "9rem", margin: "5vh" }}>GUINEA PIGS</Button>
          <Button value="Other" onClick={(e) => HandleSpecies(e)}
          style={{ backgroundColor: "#AD7940", color: "#f2faf5", width: "9rem", margin: "5vh" }}>OTHER</Button>
        </div>
      </div>

      <section style={{ width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
      { allBreeds && allBreeds.map((pet) => (
        <Card style={{ display: "flex", backgroundColor: "#C3965F", width: '27rem', height: "15rem", margin: "5vh" }}>
          <div style={{ display: "flex" }}>
            <div>

              <img style={{
                display: "flex", border: "solid black 1px", width: '10rem', height: "14rem",
                margin: "0.5rem", borderRadius: "10px"}} alt="pet" source={pet.image} />
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
              <Route path="/:petId" element={<Pet singlePet={pet}/>} />
            </Routes>
          </div>
        </Card>
       ))}
      </section>


      <div style={{width: "100%", textAlign: "center"}}>
          <Button style={{ backgroundColor: "#72552D", color: "#f2faf5", padding: "1vh", 
          fontSize: "15px", width: "10rem", margin: "50px" }} variant="primary">SEE MORE PETS</Button>
        </div>

        </div>
    </main>

  );
};

export default AllPets;
