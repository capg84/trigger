import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <Form  style={{backgroundColor: "#AD7940", opacity: "0.8", width: "50%", marginLeft: "25%", marginTop: "100px",
    marginBottom: "150px", padding: "2vh", borderRadius: "20px" }}>
      <Form.Group style={{ width: "80%", marginLeft: "10%"  }} className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{color: "#f2faf5", width: "80%", fontSize: "20px" }}>EMAIL ADDRESS:</Form.Label>
        <Form.Control style={{color: "#AD7940", fontSize: "20px" }} type="email" placeholder="ENTER EMAIL" />
      </Form.Group>

      <Form.Group style={{ width: "80%", marginLeft: "10%"  }} className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{color: "#f2faf5", width: "80%",  fontSize: "20px" }}>PASSWORD:</Form.Label>
        <Form.Control style={{color: "#AD7940", fontSize: "20px" }}type="password" placeholder="ENTER PASSWORD" />
      </Form.Group>

      <Button style={{  width: "15vh", marginLeft: "45%", backgroundColor: "#9CCBC3", color: "#f2faf5", marginBottom: "2vh", marginTop: "2vh", fontSize: "20px"}} 
      variant="primary" type="submit">
        LOGIN
      </Button>
    </Form>
  );
}

export default Login;