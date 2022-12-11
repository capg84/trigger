import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import "../assets/css/index.css"
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Signup() {
  const [formState, setFormState] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(CREATE_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      console.log(data)
      Auth.login(data.addUser.token);
      console.log(data.addUser.token)
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      {data ? (
        <p>
          Success! You may now head <Link to={`/dashboard/${data.addUser.user._id}`}>back to the homepage.</Link>
        </p>
      ) : (
        <Form
          onSubmit={handleFormSubmit}
          style={{
            backgroundColor: "#AD7940",
            opacity: "0.8",
            width: "50%",
            marginLeft: "25%",
            marginTop: "100px",
            marginBottom: "150px",
            padding: "2vh",
            borderRadius: "20px",
            className: "signup"
          
          }}
        >
          <Form.Group 
            style={{ width: "80%", marginLeft: "10%" }}

            className="mb-3 font-signup"
            controlId="formBasicName"

          >
            <Form.Label

              style={{ color: "#f2faf5", width: "80%", fontSize: "2.5vh" }}

            >
              FULL NAME:
            </Form.Label>
            <Form.Control

              style={{ fontSize: "2.5vh" }}
              type="name"

              placeholder="ENTER FULL NAME "
              name="fullname"
              value={formState.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group
            style={{ width: "80%", marginLeft: "10%" }}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label

              style={{ color: "#f2faf5", width: "80%", fontSize: "2.5vh" }}

            >
              EMAIL ADDRESS:
            </Form.Label>
            <Form.Control

              style={{  fontSize: "2.5vh" }}

              type="email"
              placeholder="ENTER EMAIL"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group
            style={{ width: "80%", marginLeft: "10%" }}
            className="mb-3"
            controlId="formBasicPassword"
          >
            <Form.Label

              style={{ color: "#f2faf5", width: "80%", fontSize: "2.5vh" }}

            >
              PASSWORD:
            </Form.Label>
            <Form.Control

              style={{ fontSize: "2.5vh" }}

              type="password"
              placeholder="ENTER PASSWORD"
              name="password"
              value={formState.password}
              onChange={handleChange}
            />
          </Form.Group>

          <div style={{width: "100%", textAlign: "center"}}>

          <Button
            style={{
              width: "15vh",
              backgroundColor: "#9CCBC3",
              color: "#f2faf5",
              marginBottom: "2vh",
              marginTop: "2vh",
            }}
            variant="primary"
            type="submit"
          >
            SIGNUP
          </Button>
          </div>
        </Form>
      )}
      {error && (
        <div>{error.message}</div>
      )}
    </div>
  );
}

export default Signup;
