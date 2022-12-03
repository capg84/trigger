import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function createUser() {
  return (
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Full name</Form.Label>
        <Form.Control type="species" placeholder="Enter full name" />
        <Form.Text className="text-muted">
          required
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control type="description" placeholder="Description" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>City</Form.Label>
        <Form.Control type="city" placeholder="City" />
        <Form.Text className="text-muted">
          required
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Country</Form.Label>
        <Form.Control type="country" placeholder="Country" />
        <Form.Text className="text-muted">
          required
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Create Pet
      </Button>
    </Form>
  );
}

export default createUser;