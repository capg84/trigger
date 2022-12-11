import '../assets/css/dashboard.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useMutation } from '@apollo/client';
import { REMOVE_LIKE } from '../utils/mutations';
import Auth from "../utils/auth";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams
} from "react-router-dom";
import Pet from "./pet";

const Favourites = ({likedPets}) => {
  const userId = Auth.getProfile().data?._id;
  const [removeLikedPet, { error }] = useMutation(REMOVE_LIKE);

  const handleRemoveLike = async (petId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    console.log('token', token);
    if (!token) {
      return false;
    }

    try {
      const { data } = await removeLikedPet({
        variables: { petId },
      });
      console.log(data);
      window.location.href=`/dashboard/${userId}/favourites`;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    
    <main style={{ display: "flex", flexWrap: "wrap", justifyContent: 'space-evenly' }}>

      {likedPets ? (
        likedPets.map(pet => (
      <Card style={{ display: "flex", backgroundColor: "#C3965F", width: '26rem', minHeight: "auto", margin: "3.5vh", padding: "0 0 3vh 3vh" }}>

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div style={{ fontSize: "20px", display: "block", width: "100%", textAlign: "start", height: "22px", margin: "1vh" }}>
            <h6 style={{ color: "#f2faf5", fontSize: "20px" }}>OWNER NAME: <span>{pet.owner.fullname}</span></h6>
          </div>

          <div>
            <img style={{
              display: "flex", border: "solid black 1px", width: '10rem', height: "12rem",
              margin: "0.5rem", borderRadius: "10px"
            }} alt="pet" src={pet.image} />
          </div>
          <div style={{ padding: "1rem", textAlign: "start" }}>
            <h6 style={{ color: "#f2faf5", padding: "1vh", fontSize: "17px" }}>PET NAME: <span>{pet.name}</span></h6>
            <h6 style={{ color: "#f2faf5", padding: "1vh", fontSize: "17px" }}>AGE: <span>{pet.age}</span></h6>
            <h6 style={{ color: "#f2faf5", padding: "1vh", fontSize: "17px" }}>GENDER: <span>{pet.gender}</span></h6>
            <h6 style={{ color: "#f2faf5", padding: "1vh", fontSize: "17px" }}>LOCATION: <span>{pet.city}, {pet.country}</span></h6>
          </div>

          <div style={{ textAlign: "start", display: "block", width: "100%", height: "22px", margin: "1vh" }}>
            <Button style={{ backgroundColor: "#72552D", color: "#f2faf5", padding: "1vh", fontSize: "15px", width: "30vh", marginBottom: "1vh" }}
              variant="primary" onClick={() => handleRemoveLike(pet._id)}>REMOVE FROM FAVOURITES</Button>
            <Link to={`/pets/${userId}/${pet._id}`}>
            <Button style={{
              marginLeft: "2vh", width: "18vh", backgroundColor: "#72552D", color: "#f2faf5", padding: "1vh", margin: "0 0 1vh 2vh",
              fontSize: "15px"
            }} variant="primary">MORE INFO</Button>
            </Link>
          </div>
          <Routes>
                  <Route path="/:userId/:petId" element={<Pet />} />
                </Routes>
        </div>
      </Card>
        ))
      ) : (
        <div>
           <h4>You have no Favourites</h4>
        </div>
      )}

    </main>
  );
};

export default Favourites;
