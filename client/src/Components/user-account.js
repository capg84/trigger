import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../Utils/mutations";

import Auth from "../Utils/auth";

const Account = ({ user }) => {
  const { userId } = useParams();
  // Create state variables for the fields in the form
  /*   const [fullname, setFullname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState(); */
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [description, setDescription] = useState();

  const [aboutMe, { error }] = useMutation(UPDATE_USER);

  const handleEditUser = async (event) => {
    event.preventDefault();
    console.log(event);
    try {
      const { data } = await aboutMe({
        variables: { userId: userId, description, city, country },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!user.length) {
    return <h3>No user found</h3>;
  }

  return (
    <div className="formContainer">
      {Auth.loggedIn() ? (
        <Form
          onSubmit={handleEditUser}
          style={{
            backgroundColor: "#AD7940",
            opacity: "0.8",
            width: "80%",
            marginLeft: "10%",
            marginTop: "50px",
            marginBottom: "150px",
            padding: "2vh",
          }}
        >
          <Form.Group
            style={{ width: "94%", marginLeft: "3%", display: "inline-block" }}
            className="mb-3"
          >
            <Form.Label
              style={{ color: "#f2faf5", width: "80%", fontSize: "15px" }}
            >
              FULL NAME:
            </Form.Label>
            <Form.Control
              style={{ color: "#AD7940", fontSize: "15px" }}
              type="text"
              placeholder="EXISTING NAME"
            />
          </Form.Group>

          <Form.Group
            style={{ width: "94%", marginLeft: "3%", display: "inline-block" }}
            className="mb-3"
          >
            <Form.Label
              style={{ color: "#f2faf5", width: "80%", fontSize: "15px" }}
            >
              EMAIL:
            </Form.Label>
            <Form.Control
              style={{ color: "#AD7940", fontSize: "15px" }}
              type="email"
              placeholder="EXISTING EMAIL"
            />
          </Form.Group>

          <Form.Group
            style={{ width: "94%", marginLeft: "3%", display: "inline-block" }}
            className="mb-3"
            controlId="formBasicPassword"
          >
            <Form.Label
              style={{ color: "#f2faf5", width: "80%", fontSize: "15px" }}
            >
              PASSWORD:
            </Form.Label>
            <Form.Control
              style={{ color: "#AD7940", fontSize: "15px" }}
              type="password"
              placeholder="***********"
            />
          </Form.Group>

          <Form.Group
            style={{ width: "94%", marginLeft: "3%", display: "inline-block" }}
            className="mb-3"
          >
            <Form.Label
              style={{ color: "#f2faf5", width: "80%", fontSize: "15px" }}
            >
              CITY:
            </Form.Label>
            <Form.Control
              style={{ color: "#AD7940", fontSize: "15px" }}
              type="text"
              placeholder="EXISTING CITY"
            />
          </Form.Group>

          <Form.Group
            style={{ width: "94%", marginLeft: "3%", display: "inline-block" }}
            className="mb-3"
          >
            <Form.Label
              style={{ color: "#f2faf5", width: "80%", fontSize: "15px" }}
            >
              COUNTRY:
            </Form.Label>
            <Form.Control
              style={{ color: "#AD7940", fontSize: "15px" }}
              type="text"
              placeholder="EXISTING COUNTRY"
            />
          </Form.Group>

          <Form.Group
            style={{ width: "94%", marginLeft: "3%" }}
            className="mb-3"
          >
            <Form.Label
              style={{ color: "#f2faf5", width: "95%", fontSize: "15px" }}
            >
              DESCRIPTION:
            </Form.Label>
            <textarea
              style={{
                color: "#AD7940",
                fontSize: "15px",
                height: "100px",
                width: "99%",
              }}
              type="description"
              placeholder="EXISTING DESCRIPTION"
              className="form-control input"
            />
          </Form.Group>

          <div style={{ textAlign: "center" }}>
            <Button
              style={{
                width: "25vh",
                backgroundColor: "#9CCBC3",
                color: "#f2faf5",
                marginBottom: "2vh",
                marginTop: "2vh",
                fontSize: "15px",
              }}
              variant="primary"
              type="submit"
            >
              UPDATE DETAILS
            </Button>
          </div>
        </Form>
      ) : (
        <p>
          You need to be logged in to update account. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default Account;
