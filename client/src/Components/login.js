import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../Utils/mutations";
import Auth from "../Utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      {data ? (
        <p>
          Success! You may now head <Link to="/">back to the homepage.</Link>
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
          }}
        >
          <Form.Group
            style={{ width: "80%", marginLeft: "10%" }}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label
              style={{ color: "#f2faf5", width: "80%", fontSize: "20px" }}
            >
              EMAIL ADDRESS:
            </Form.Label>
            <Form.Control
              style={{ color: "#AD7940", fontSize: "20px" }}
              type="email"
              placeholder="ENTER EMAIL"
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
              style={{ color: "#f2faf5", width: "80%", fontSize: "20px" }}
            >
              PASSWORD:
            </Form.Label>
            <Form.Control
              style={{ color: "#AD7940", fontSize: "20px" }}
              type="password"
              placeholder="ENTER PASSWORD"
              value={formState.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Button
            style={{
              width: "15vh",
              marginLeft: "45%",
              backgroundColor: "#9CCBC3",
              color: "#f2faf5",
              marginBottom: "2vh",
              marginTop: "2vh",
              fontSize: "20px",
            }}
            variant="primary"
            type="submit"
          >
            LOGIN
          </Button>
        </Form>
      )}
      {error && (
        <div>{error.message}</div>
      )}
    </div>
  );
};

export default Login;
