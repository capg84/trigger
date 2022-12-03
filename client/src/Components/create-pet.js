import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function createPet() {
  return (
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Animal species</Form.Label>
        <Form.Control type="species" placeholder="Enter species" />
        <Form.Text className="text-muted">
          required
        </Form.Text>
      </Form.Group>

       <Form.Group className="mb-3" >
        <Form.Label>Breed</Form.Label>
        <Form.Control type="breed" placeholder="Breed" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Colour</Form.Label>
        <Form.Control type="colour" placeholder="Colour" />
        <Form.Text className="text-muted">
          required
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Name" />
        <Form.Text className="text-muted">
          required
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Image</Form.Label>
        <Form.Control type="image" placeholder="Image" />
        <Form.Text className="text-muted">
          required
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control type="description" placeholder="Description" />
        <Form.Text className="text-muted">
          required
        </Form.Text>
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

      <Form.Group className="mb-3" >
        <Form.Label>Medical history</Form.Label>
        <Form.Control type="medical-history" placeholder="Medical history" />
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

export default createPet;