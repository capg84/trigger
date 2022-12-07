import React from "react";
import "../Assets/Styles/pet.css"
import Button from 'react-bootstrap/Button';
import Image from "../Assets/Images/pets/Dodo.jpg"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";
import { useQuery } from "@apollo/client";

import { PET } from '../Utils/queries';
import Auth from "../Utils/auth";

const Pet = ({ singlePet }) => {
  const userId = Auth.getProfile().data._id;
  console.log(userId);
  const { petId } = useParams();
  const { loading, data } = useQuery(PET, {
    variables: { petId: petId },
  });

  // Check if data is returning from the query
  const pet = data?.pet || {};

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return <main>

    <div className="pet">
      <div className="header-container-pet">
        <p className="date-created">POST CREATED: <span>{pet.dateCreated}</span></p>
        <button class="btn-secondary like-review">
          <i class="fa fa-heart" aria-hidden="true"></i> Like
        </button>
        <h3 className="header-text-pet">{pet.name}</h3>
      </div>

      <div className="pet-div">
        <div className="pet-image-div">
          <img className="pet-image" alt="pet" src={pet.image}></img>
        </div>

        <div className="pet-details">
          <h6>AGE: <span>{pet.age}</span></h6>
          <h6>GENDER: <span>{pet.gender}</span></h6>
          <h6>SPECIES: <span>{pet.species}</span></h6>
          <h6>BREED: <span>{pet.breed}</span></h6>
          <h6>COLOUR: <span>{pet.colour}</span></h6>
          <h6>CITY: <span>{pet.city}</span></h6>
          <h6>COUNTRY: <span>{pet.country}</span></h6>
        </div>
      </div>


      <div className="pet-description">
        <h6>DESCRIPTION:</h6>
        <p>{pet.description}</p>
        <h6>MEDICAL HISTORY:</h6>
        <p>{pet.medicalHistory}</p>
      </div>

      <div className="pet-buttons-div">
        <div className="pet-buttons">
          <Link to="/rehome">
          <Button>BACK TO PETS</Button>
          </Link>
          {Auth.loggedIn() ? (
          <Link to={`/dashboard/${userId}}/messages/${pet.owner._id}`}>
          <Button>MESSAGE: <span>{pet.owner.fullname}</span></Button>
          </Link>
          ) : (
          <Link to="/login">
            <Button>MESSAGE: <span>{pet.owner.fullname}</span></Button>
          </Link>
          )}
        </div>
      </div>
    </div>

    <section className="comment-section">
      <div>
        <div>
          <InputGroup>
            <Button style={{ backgroundColor: "#AD7940" }} className="comment-button">ENTER COMMENT</Button>
            <Form.Control as="textarea" aria-label="With textarea" />
          </InputGroup>
        </div>

        <div className="saved-comments">
          <div className="comment-header">
            <h6>{ }</h6>
            <h6>{ }</h6>
          </div>

          <div className="comment-text">
            <p>{ }</p>
          </div>
        </div>
      </div>
    </section>



  </main >;
};

export default Pet;
