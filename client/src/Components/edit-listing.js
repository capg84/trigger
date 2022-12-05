import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useMutation } from '@apollo/client';
import { UPDATE_PET } from '../Utils/mutations';

function EditListing({pet}) {
  // Create state variables for the fields in the formg
  const [species, setSpecies] = useState();
  const [breed, setBreed] = useState();
  const [image, setImage] = useState();
  const [colour, setColour] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [medical, setMedical] = useState();
  const [updatePet, { error }] = useMutation(UPDATE_PET);

const handleEditPet = async (event) => {
  event.preventDefault();
  console.log(event);
    try {
      const { data } = await updatePet({
        variables: {id: pet._id,  } 
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!pet.length) {
    return <h3>No pet found</h3>;
  }

  return (
    <div className="formContainer">
    <Form onSubmit={handleEditPet} style={{backgroundColor: "#AD7940", opacity: "0.8", width: "80%", marginLeft: "10%", marginTop: "100px",
    marginBottom: "150px", padding: "2vh" }}>
      <Form.Group style={{ width: "45%", marginLeft: "3%", display: "inline-block" }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "20px" }}>ANIMAL SPECIES:</Form.Label>
        <Form.Control style={{color: "#AD7940", fontSize: "20px" }} type="species" placeholder="REQUIRED" value={`${pet.species}`} />
      </Form.Group>

      <Form.Group style={{ width: "45%", marginLeft: "3%", display: "inline-block" }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "20px" }}>BREED:</Form.Label>
        <Form.Control style={{color: "#AD7940", fontSize: "20px" }}  type="breed" placeholder="REQUIRED" value={`${pet.breed}`} />
      </Form.Group>

      <Form.Group style={{ width: "45%", marginLeft: "3%", display: "inline-block" }}className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "20px" }}>COLOUR:</Form.Label>
        <Form.Control style={{color: "#AD7940", fontSize: "20px" }}  type="colour" placeholder="REQUIRED" value={`${pet.colour}`}/>
      </Form.Group>

      <Form.Group style={{ width: "45%", marginLeft: "3%", display: "inline-block" }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "20px" }}>NAME:</Form.Label>
        <Form.Control style={{color: "#AD7940", fontSize: "20px" }}  type="name" placeholder="REQUIRED" value={`${pet.name}`}/>
      </Form.Group>

      <Form.Group style={{ width: "100%", marginLeft: "3%" ,  }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "20px"  }}>UPLOAD IMAGE OF YOUR PET:</Form.Label>
        <Form.Control style={{ width: "81%", fontSize: "20px", display: "inline-block" }} type="file" placeholder="ENTER IMAGE" value={`${pet.image}`}accept="image/png image.jpg" />
        <Button style={{   backgroundColor: "#9CCBC3", color: "#f2faf5", fontSize: "20px", marginLeft:"1vh", marginBottom:"1vh"}}
        variant="primary" type="btn">UPLOAD IMAGE</Button>
      </Form.Group> 

      <Form.Group style={{ width: "94%", marginLeft: "3%"  }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "95%", fontSize: "20px" }}>DESCRIPTION:</Form.Label>
        <textarea style={{color: "#AD7940", fontSize: "20px", height:"100px", width: "99%"}}  type="description" placeholder="REQUIRED" value={`${pet.description}`}
        className="form-control input" />
      </Form.Group>

      <Form.Group style={{ width: "45%", marginLeft: "3%", display: "inline-block" }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "20px" }}>CITY:</Form.Label>
        <Form.Control style={{color: "#AD7940", fontSize: "20px" }}  type="city" placeholder="REQUIRED" value={`${pet.city}`}/>
      </Form.Group>

      <Form.Group style={{ width: "45%", marginLeft: "3%", display: "inline-block" }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "20px" }}>COUNRTY:</Form.Label>
        <Form.Control style={{color: "#AD7940", fontSize: "20px" }}  type="country" placeholder="REQUIRED" value={`${pet.country}`}/>
      </Form.Group>

      <Form.Group style={{ width: "93%", marginLeft: "3%"  }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "20px" }}>MEDICAL HISTORY:</Form.Label>
        <Form.Control style={{color: "#AD7940", fontSize: "20px" }} type="medical-history" placeholder="REQUIRED" value={`${pet.medicalHistory}`}/>
      </Form.Group>

      <Button style={{  width: "25vh", marginLeft: "42%", backgroundColor: "#9CCBC3", color: "#f2faf5", marginBottom: "2vh", marginTop: "2vh", fontSize: "20px"}}
       variant="primary" type="submit">
        CREATE PET
      </Button>
    </Form>
    </div>
  );
}

export default EditListing;