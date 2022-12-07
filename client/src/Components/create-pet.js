// import FileBase64 from 'react-file-base64';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../Assets/Styles/dashboard.css"
// import { useState, useMutation } from 'react'



function CreatePet() {
 
  return (
    <div className="formContainer">
    <Form style={{backgroundColor: "#AD7940", opacity: "0.8", width: "80%", marginLeft: "10%", marginTop: "50px",
    marginBottom: "150px", padding: "2vh" }}>
      <Form.Group style={{ width: "94%", marginLeft: "3%" }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "2.5vh" }}>ANIMAL SPECIES:</Form.Label>
        <Form.Control style={{ fontSize: "2.5vh" }} type="species" placeholder="REQUIRED" />
      </Form.Group>

      <Form.Group style={{ width: "94%", marginLeft: "3%" }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "2.5vh" }}>BREED:</Form.Label>
        <Form.Control style={{ fontSize: "2.5vh" }}  type="species" placeholder="REQUIRED" />
      </Form.Group>

      <Form.Group style={{ width: "94%", marginLeft: "3%" }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "2.5vh" }}>COLOUR:</Form.Label>
        <Form.Control style={{ fontSize: "2.5vh" }}  type="colour" placeholder="REQUIRED" />
      </Form.Group>

      <Form.Group style={{ width: "94%", marginLeft: "3%" }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "2.5vh" }}>NAME:</Form.Label>
        <Form.Control style={{fontSize: "2.5vh" }}  type="name" placeholder="REQUIRED" />
      </Form.Group>

      <Form.Group style={{ width: "94%", marginLeft: "3%" ,  }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "95%", fontSize: "2.5vh"  }}>UPLOAD IMAGE OF YOUR PET:</Form.Label>
        <Form.Control style={{ width: "100%", fontSize: "2.5vh", display: "inline-block" }} type="file" placeholder="ENTER IMAGE" accept="image/png image.jpg" />
        {/* <Button style={{   backgroundColor: "#9CCBC3", color: "#f2faf5", fontSize: "15px", marginLeft:"1vh", marginBottom:"1vh"}}
        variant="primary" type="btn">UPLOAD IMAGE</Button> */}
      </Form.Group> 

      <Form.Group style={{ width: "94%", marginLeft: "3%"  }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "95%", fontSize: "2.5vh" }}>DESCRIPTION:</Form.Label>
        <textarea style={{ fontSize: "2.5vh", height:"100px", width: "99%"}}  type="description" placeholder="REQUIRED" 
        className="form-control input" />
      </Form.Group>

      <Form.Group style={{ width: "94%", marginLeft: "3%" }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "2.5vh" }}>CITY:</Form.Label>
        <Form.Control style={{fontSize: "2.5vh" }}  type="city" placeholder="REQUIRED" />
      </Form.Group>

      <Form.Group style={{ width: "94%", marginLeft: "3%" }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "2.5vh" }}>COUNRTY:</Form.Label>
        <Form.Control style={{color: "#AD7940", fontSize: "2.5vh" }}  type="country" placeholder="REQUIRED" />
      </Form.Group>

      <Form.Group style={{ width: "94%", marginLeft: "3%"  }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "2.5vh" }}>MEDICAL HISTORY:</Form.Label>
        <Form.Control style={{ fontSize: "2.5vh" }} type="medical-history" placeholder="REQUIRED" />
      </Form.Group>
        <div style={{ textAlign: "center"}}>
      <Button style={{  width: "25vh",  backgroundColor: "#9CCBC3", color: "#f2faf5", 
              marginBottom: "2vh", marginTop: "2vh", fontSize: "3vh"}}
       variant="primary" type="submit">
        CREATE PET
      </Button>
      </div>
    </Form>
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
