import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Account = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="name" placeholder="Existing name" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" placeholder="Existing email" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Location:</Form.Label>
        <Form.Control type="location" placeholder="Existing location" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="***********" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description:</Form.Label>
        <Form.Control
          type="description"
          placeholder="Existing user description"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Looking for:</Form.Label>
        <Form.Control
          type="lookingFor"
          placeholder="Existing looking for information"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Update details
      </Button>
    </Form>
  );
};

export default Account;
