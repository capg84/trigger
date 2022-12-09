// import FileBase64 from 'react-file-base64';
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../Assets/Styles/dashboard.css"
import { useMutation } from "@apollo/client";
import { CREATE_PET } from "../Utils/mutations";
import {
  BrowserRouter as Router,
  Link,
  useParams,
} from "react-router-dom";

import Auth from '../Utils/auth';

function CreatePet({ user }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [breed, setBreed] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [colour, setColour] = useState('');
  const [image, setImage] = useState('');

  const [addPet, { error }] = useMutation(CREATE_PET);
  const owner = Auth.getProfile().data?._id;
  const handleCreatePet = async (event) => {
    event.preventDefault();

    console.log(event);

    try {
      const { data } = await addPet({
        variables: {
          species,
          breed,
          image,
          colour,
          name,
          description,
          gender,
          city,
          country,
          medicalHistory,
          age,
          owner,
        },
      });
      console.log(data.addPet);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
    {Auth.loggedIn() ? (

    <div className="formContainer">
      
    <Form className="create-listing-form" style={{backgroundColor: "#AD7940", opacity: "0.8", width: "80%", marginLeft: "10%", marginTop: "50px",
    marginBottom: "150px", padding: "2vh" }} onSubmit={handleCreatePet}>

<Form.Group style={{ width: "94%", marginLeft: "3%" }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "2.5vh" }}>NAME:</Form.Label>
        <Form.Control style={{color: "#AD7940", fontSize: "2.5vh" }}  type="name" placeholder="REQUIRED" onChange={(event) => setName(event.target.value)}/>
      </Form.Group>

      <Form.Group style={{ width: "94%", marginLeft: "3%" }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "2.5vh" }}>AGE:</Form.Label>
        <Form.Control style={{color: "#AD7940", fontSize: "2.5vh" }}  type="name" placeholder="REQUIRED" onChange={(event) => setAge(event.target.value)}/>
      </Form.Group>

      <Form.Group style={{ width: "94%", marginLeft: "3%" }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "2.5vh" }}>GENDER:</Form.Label>
        <Form.Control style={{color: "#AD7940", fontSize: "2.5vh" }}  type="name" placeholder="REQUIRED" onChange={(event) => setGender(event.target.value)}/>
      </Form.Group>

      <Form.Group style={{ width: "94%", marginLeft: "3%" }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "2.5vh" }}>ANIMAL SPECIES:</Form.Label>
        <Form.Control style={{color: "#AD7940", fontSize: "2.5vh" }} type="species" placeholder="REQUIRED" onChange={(event) => setSpecies(event.target.value)}/>
      </Form.Group>

      <Form.Group style={{ width: "94%", marginLeft: "3%" }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "2.5vh" }}>BREED:</Form.Label>
        <Form.Control style={{color: "#AD7940", fontSize: "2.5vh" }}  type="species" placeholder="REQUIRED" onChange={(event) => setBreed(event.target.value)}/>
      </Form.Group>

      <Form.Group style={{ width: "94%", marginLeft: "3%" }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "2.5vh" }}>COLOUR:</Form.Label>
        <Form.Control style={{color: "#AD7940", fontSize: "2.5vh" }}  type="colour" placeholder="REQUIRED" onChange={(event) => setColour(event.target.value)}/>
      </Form.Group>

      <Form.Group style={{ width: "94%", marginLeft: "3%" ,  }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "95%", fontSize: "2.5vh"  }}>ENTER URL FOR IMAGE OF PET:</Form.Label>
        <Form.Control style={{ width: "100%", fontSize: "2.5vh", display: "inline-block" }}  placeholder="ENTER IMAGE" onChange={(event) => setImage(event.target.value)} accept="image/png image.jpg" />
      </Form.Group> 

      <Form.Group style={{ width: "94%", marginLeft: "3%"  }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "95%", fontSize: "2.5vh" }}>DESCRIPTION:</Form.Label>
        <textarea style={{color: "#AD7940", fontSize: "2.5vh", height:"100px", width: "99%"}}  type="description" placeholder="REQUIRED" 
        className="form-control input" onChange={(event) => setDescription(event.target.value)}/>
      </Form.Group>

      <Form.Group style={{ width: "94%", marginLeft: "3%" }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "2.5vh" }}>CITY:</Form.Label>
        <Form.Control style={{color: "#AD7940", fontSize: "2.5vh" }}  type="city" placeholder="REQUIRED" onChange={(event) => setCity(event.target.value)}/>
      </Form.Group>

      <Form.Group style={{ width: "94%", marginLeft: "3%" }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "2.5vh" }}>COUNRTY:</Form.Label>
        <Form.Control style={{color: "#AD7940", fontSize: "2.5vh" }}  type="country" placeholder="REQUIRED" onChange={(event) => setCountry(event.target.value)}/>
      </Form.Group>

      <Form.Group style={{ width: "94%", marginLeft: "3%"  }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "2.5vh" }}>MEDICAL HISTORY:</Form.Label>
        <Form.Control style={{color: "#AD7940", fontSize: "2.5vh" }} type="medical-history" placeholder="REQUIRED" onChange={(event) => setMedicalHistory(event.target.value)}/>
      </Form.Group>
        <div style={{ textAlign: "center"}}>
      <Button style={{  width: "25vh",  backgroundColor: "#9CCBC3", color: "#f2faf5", 
              marginBottom: "2vh", marginTop: "2vh", fontSize: "2.5vh"}}
       variant="primary" type="submit">
        CREATE PET
      </Button>
      </div>
    </Form>
    </div>
    ) : (
      <p>
        You need to be logged in to update account. Please{" "}
        <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
      </p>
    )}
    </div>
  );
}

export default CreatePet;


// <Form.Group className="mb-3" >
// <Form.Label>Upload image of your pet</Form.Label>
// <Form.Control type="file" placeholder="Image" accept="image/png image.jpg" />
// // onchange={e => setItem({...item, title: e.taret.value })}/>
// // <FileBase64
// // multiple={ false }
// // onDone={ ({base64}) => setItem({...item, image: base64 }) } />
// <Button variant="primary" type="btn">
// Choose image
// </Button>
// <Form.Text className="text-muted">
//   required
// </Form.Text>
// </Form.Group>
