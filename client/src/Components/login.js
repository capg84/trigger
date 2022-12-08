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
      console.log(data.login.token, "++++++++++++++++++++++++")
      window.location.href=`/dashboard/${data.login.user._id}`;
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
          Success! You may now head <Link to={`/dashboard/${data.login.user._id}`}> to the dashboard.</Link>
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
              style={{ color: "#f2faf5", width: "80%", fontSize: "2.5vh" }}>
              EMAIL ADDRESS:
            </Form.Label>
            <Form.Control
              style={{  fontSize: "2.5vh" }}
              type="email"
              name="email"
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
              style={{ color: "#f2faf5", width: "80%", fontSize: "2.5vh" }}
            >
              PASSWORD:
            </Form.Label>
            <Form.Control
              style={{ fontSize: "2.5vh" }}
              type="password"
              name="password"
              placeholder="ENTER PASSWORD"
              value={formState.password}
              onChange={handleChange}
            />
          </Form.Group>

          <div style={{ width: "100%", textAlign: "center" }}>
            <Button
              style={{
                width: "15vh",
                backgroundColor: "#9CCBC3",
                color: "#f2faf5",
                marginBottom: "2vh",
                marginTop: "2vh",
                fontSize: "2.5vh",
              }}
              variant="primary"
              type="submit"
            >
              LOGIN
            </Button>

          </div>
        </Form>
      )}
      {error && (
        <div>{error.message}</div>
      )}
    </div>
  );
};

export default Login;
