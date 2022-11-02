import React, { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";
import logoWhite from "../images/305-burrito-white.png";
import axios from "axios";

const LoginForm = (props) => {
  const [email, setEmail] = useState("anieto@gmail.com");
  const [password, setPassword] = useState("123456789");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/accounts/login",
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res, "res");
        console.log(res.data, "is res data!");
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.response.data);
        setErrorMessage(err.response.data.message);
      });
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <img className="logo" src={logoWhite} alt="Restaurant Logo" />
        <h1>Welcome Back!</h1>
        <input
          className="form-control"
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="form-control"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {errorMessage && <p className="error">{errorMessage}</p>}
        <div>
          <button type="submit" className="btn btn-info signUpBtn">
            Log In
          </button>
        </div>
        <hr />
        <Link to="/accounts/register" className="register__link">
          Don't Have an Account? Register
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
