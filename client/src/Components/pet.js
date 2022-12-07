import React from "react";
import "../Assets/Styles/pet.css"
import Button from 'react-bootstrap/Button';
import Image from "../Assets/Images/pets/Dodo.jpg"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Auth from "../Utils/auth"

import { Navigate, useParams } from "react-router-dom";
import {  useQuery } from "@apollo/client";

import { PET } from '../Utils/queries';


const Pet = () => {
  const { petId } = useParams();

  const { loading, data } = useQuery(PET, {
    variables: { petId: petId },
  });

  // Check if data is returning from the query
  const pet = data?.pet || {};

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  if (!pet?.name) {
    return (
      <h4>
        No pet found with this ID!
      </h4>
    );
  }

  return <main>

    <div className="pet">
      <div className="header-container-pet">
        <p className="date-created">POST CREATED: <span>{ }</span></p>
        <button class="btn-secondary like-review">
          <i class="fa fa-heart" aria-hidden="true"></i> Like
        </button>
        <h3 className="header-text-pet">{ }</h3>
      </div>

      <div className="pet-div">
        <div className="pet-image-div">
          <img className="pet-image" alt="pet" src={Image}></img>
        </div>

        <div className="pet-details">
          <h6>AGE: <span>{ }</span></h6>
          <h6>GENDER: <span>{ }</span></h6>
          <h6>SPECIES: <span>{ }</span></h6>
          <h6>BREED: <span>{ }</span></h6>
          <h6>COLOUR: <span>{ }</span></h6>
          <h6>CITY: <span>{ }</span></h6>
          <h6>COUNTRY: <span>{ }</span></h6>
        </div>
      </div>


      <div className="pet-description">
        <h6>DESCRIPTION:</h6>
        <p>{ }</p>
        <h6>MEDICAL HISTORY:</h6>
        <p>{ }</p>
      </div>

      <div className="pet-buttons-div">
        <div className="pet-buttons">
          <Button>BACK TO PETS</Button>
          <Button>MESSAGE: <span>{ }</span></Button>
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
            <span class="material-symbols-outlined">delete</span>
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
