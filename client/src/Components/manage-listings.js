import "../Assets/Styles/dashboard.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Navigate,
  Routes,
  Link,
  useParams,
  useLocation,
} from "react-router-dom";
import EditListing from "../Components/edit-listing";
import { useMutation } from '@apollo/client';
import { REMOVE_PET } from '../Utils/mutations';
import Auth from "../Utils/auth";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ManageListing = ({ pets }) => {
  const { userId } = useParams();
  console.log('id:', userId)
  const [removePet, { error }] = useMutation(REMOVE_PET);

  const handleRemovePet = async (petId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removePet({
        variables: { petId },
      });
    } catch (err) {
      console.error(err);
    }
  };
  console.log(pets);
  
  return (
<main style={{ display: "flex", flexWrap: "wrap", justifyContent: 'space-evenly' }}>
  { pets && 
  pets.map((pet) => (
    <Card key={pet} style={{ display: "flex", backgroundColor: "#C3965F", width: '26rem', height: "fit-content", 
          margin: "3.5vh", padding: "2vh 0 3vh 3vh" }}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div>
          <img style={{
            display: "flex", border: "solid black 1px", width: '10rem', height: "12rem",
            margin: "0.5rem", borderRadius: "10px"
          }} alt="pet" src="/" />
        </div>
        <div style={{ padding: "1rem", textAlign: "start" }}>
        <h6 style={{ color: "#f2faf5", padding: "1vh", fontSize: "17px" }}>PET NAME: <span>{pet.name}</span></h6>
          <h6 style={{ color: "#f2faf5", padding: "1vh", fontSize: "17px" }}>AGE: <span>{pet.age}</span></h6>
          <h6 style={{ color: "#f2faf5", padding: "1vh", fontSize: "17px" }}>GENDER: <span>{pet.gender}</span></h6>
          <h6 style={{ color: "#f2faf5", padding: "1vh", fontSize: "17px" }}>LOCATION: <span>{pet.location}</span></h6>
        </div>
        <div style={{ textAlign: "center", display: "block", width: "100%", height: "22px", margin: "1vh" }}>
        <Link to={`/dashboard/${userId}/edit/${pet._id}`}>
          <Button style={{ backgroundColor: "#72552D", color: "#f2faf5", padding: "1vh", fontSize: "15px", width: "15vh", marginBottom: "1vh" }}
            variant="primary">EDIT</Button>
          </Link>
          <Button style={{ marginLeft: "2vh", width: "15vh", backgroundColor: "#72552D", color: "#f2faf5", 
          padding: "1vh", margin: "0 0 1vh 2vh", fontSize: "15px"}} variant="primary" onClick={() => handleRemovePet(pet._id)}>DELETE</Button>
        </div>
      </div>
      <div>
      <Routes>
            <Route path="/edit/:petId" element={<EditListing pet={pet}/>} />
      </Routes>
      </div>
    </Card>
  ))}
</main>

    // <div className="outer-container">
    //   <div className="listings-container">
    //     <article className="listing-item">
    //       <div className="listing-image">
    //         <p>pet image here</p>
    //       </div>
    //       <div className="listing-info">
    //         <p>Pet name</p>
    //         <p>Location</p>
    //         <p>Age</p>
    //         <p>Gender</p>
    //       </div>
    //     </article>
    //     <div className="listing-buttons">
    //       <button className="edit-btn" id="edit">
    //         EDIT
    //       </button>
    //       <button className="del-btn" id="delete">
    //         DELETE
    //       </button>
    //     </div>
    //   </div>

    //   <div className="listings-container">
    //     <article className="listing-item">
    //       <div className="listing-image">
    //         <p>pet image here</p>
    //       </div>
    //       <div className="listing-info">
    //         <p>Pet name</p>
    //         <p>Location</p>
    //         <p>Age</p>
    //         <p>Gender</p>
    //       </div>
    //     </article>
    //     <div className="listing-buttons">
    //       <button className="edit-btn" id="edit">
    //          EDIT 
    //       </button>
    //       <button className="del-btn" id="delete">
    //         DELETE
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ManageListing;
