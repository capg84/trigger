import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Account = () => {
  return (
    <div className="formContainer">


<Form style={{backgroundColor: "#AD7940", opacity: "0.8", width: "80%", marginLeft: "10%", marginTop: "50px",
    marginBottom: "150px", padding: "2vh" }}>
      <Form.Group style={{ width: "94%", marginLeft: "3%", display: "inline-block" }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "15px" }}>FULL NAME:</Form.Label>
        <Form.Control style={{color: "#AD7940", fontSize: "15px" }} type="species" placeholder="EXISTING NAME" />
      </Form.Group>

      <Form.Group style={{ width: "94%", marginLeft: "3%", display: "inline-block" }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "15px" }}>EMAIL:</Form.Label>
        <Form.Control style={{color: "#AD7940", fontSize: "15px" }}  type="species" placeholder="EXISTING EMAIL" />
      </Form.Group>

      <Form.Group style={{ width: "94%", marginLeft: "3%", display: "inline-block" }} className="mb-3" controlId="formBasicPassword" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "15px" }}>PASSWORD:</Form.Label>
        <Form.Control style={{color: "#AD7940", fontSize: "15px" }}  type="colour" placeholder="***********" />
      </Form.Group>

      <Form.Group style={{ width: "94%", marginLeft: "3%", display: "inline-block" }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "15px" }}>CITY:</Form.Label>
        <Form.Control style={{color: "#AD7940", fontSize: "15px" }}  type="name" placeholder="EXISTING CITY" />
      </Form.Group>

      <Form.Group style={{ width: "94%", marginLeft: "3%", display: "inline-block" }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "15px" }}>COUNTRY:</Form.Label>
        <Form.Control style={{color: "#AD7940", fontSize: "15px" }}  type="name" placeholder="EXISTING COUNTRY" />
      </Form.Group>

      <Form.Group style={{ width: "94%", marginLeft: "3%", display: "inline-block" }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "15px" }}>LOOKING FOR:</Form.Label>
        <Form.Control style={{color: "#AD7940", fontSize: "15px" }}  type="name" placeholder="Existing looking for information" />
      </Form.Group>

      <Form.Group style={{ width: "94%", marginLeft: "3%"  }} className="mb-3" >
        <Form.Label style={{color: "#f2faf5", width: "95%", fontSize: "15px" }}>DESCRIPTION:</Form.Label>
        <textarea style={{color: "#AD7940", fontSize: "15px", height:"100px", width: "99%"}}  type="description" placeholder="EXISTING DESCRIPTION" 
        className="form-control input" />
      </Form.Group>
      
    <div style={{textAlign:"center"}} >
      <Button style={{  width: "25vh", backgroundColor: "#9CCBC3", color: "#f2faf5", 
      marginBottom: "2vh", marginTop: "2vh", fontSize: "15px"}}
       variant="primary" type="submit">
        UPDATE DETAILS
      </Button>
      </div>
    </Form>

   
    </div>
  );
};

export default Account;
