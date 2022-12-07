import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../Utils/mutations";

import Auth from "../Utils/auth";

function CreateUser() {
  return (
    <Form style={{backgroundColor: "#AD7940", opacity: "0.8", width: "80%", marginLeft: "10%", marginTop: "100px",
    marginBottom: "150px", padding: "2vh" }}>
      <Form.Group style={{ width: "94%", marginLeft: "3%", display: "inline-block" }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "2.5vh" }}>FULL NAME:</Form.Label>
        <Form.Control style={{ fontSize: "2.5vh" }} type="species" placeholder="REQUIRED" />
      </Form.Group>

      <Form.Group style={{ width: "94%", marginLeft: "3%", display: "inline-block" }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "2.5vh" }}>EMAIL:</Form.Label>
        <Form.Control style={{ fontSize: "2.5vh" }}  type="species" placeholder="REQUIRED" />
      </Form.Group>

      <Form.Group style={{ width: "94%", marginLeft: "3%", display: "inline-block" }} className="mb-3" controlId="formBasicPassword" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "2.5vh" }}>PASSWORD:</Form.Label>
        <Form.Control style={{ fontSize: "2.5vh" }}  type="colour" placeholder="REQUIRED" />
      </Form.Group>

      <Form.Group style={{ width: "94%", marginLeft: "3%", display: "inline-block" }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "2.5vh" }}>CITY:</Form.Label>
        <Form.Control style={{ fontSize: "2.5vh" }}  type="name" placeholder="REQUIRED" />
      </Form.Group>

      <Form.Group style={{ width: "94%", marginLeft: "3%", display: "inline-block" }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "2.5vh" }}>COUNTRY:</Form.Label>
        <Form.Control style={{fontSize: "2.5vh" }}  type="name" placeholder="REQUIRED" />
      </Form.Group>

      <Form.Group style={{ width: "94%", marginLeft: "3%", display: "inline-block" }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "2.5vh" }}>LOOKING FOR:</Form.Label>
        <Form.Control style={{ fontSize: "2.5vh" }}  type="name" placeholder="OPTIONAL" />
      </Form.Group>

      <Form.Group style={{ width: "94%", marginLeft: "3%"  }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "95%", fontSize: "2.5vh" }}>DESCRIPTION:</Form.Label>
        <textarea style={{ fontSize: "2.5vh", height:"100px", width: "99%"}}  type="description" placeholder="REQUIRED" 
        className="form-control input" />
      </Form.Group>
      

      <Button style={{  width: "25vh", marginLeft: "42%", backgroundColor: "#9CCBC3", color: "#f2faf5", 
              marginBottom: "2vh", marginTop: "2vh", fontSize: "3vh"}}
              variant="primary" type="submit">
        CREATE PROFILE
      </Button>
    </Form>
  );
}

export default CreateUser;