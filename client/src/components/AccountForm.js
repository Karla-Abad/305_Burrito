import axios from "axios";
import logoWhite from "../images/305-burrito-white.png";
import React, { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";

const AccountForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accounts, setAccounts] = useState([]);
  const [errors, setErrors] = useState({});
  const [confirmReg, setConfirmReg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/accounts/register",
        {
          firstName,
          lastName,
          email,
          address,
          city,
          state,
          password,
          confirmPassword,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        setFirstName("");
        setLastName("");
        setEmail("");
        setAddress("");
        setCity("");
        setState("");
        setPassword("");
        setConfirmPassword("");
        setAccounts([...accounts, res.data]);
        setConfirmReg("Thank you for Registering, you can now log in!");
        setErrors({});
      })
      .catch((err) => {
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div className="register">
      <form className="register__form" onSubmit={handleSubmit}>
        <img className="logo" src={logoWhite} alt="Restaurant Logo" />
        <h1>Create Account</h1>
        <input
          className="form-control"
          placeholder="First Name"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        {errors.firstName && (
          <p className="error">{errors.firstName.message}</p>
        )}

        <input
          className="form-control"
          placeholder="Last Name"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        {errors.lastName && <p className="error">{errors.lastName.message}</p>}

        <input
          className="form-control"
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {errors.email && <p className="error">{errors.email.message}</p>}

        <input
          className="form-control"
          placeholder="Street Address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        {errors.address && <p className="error">{errors.address.message}</p>}

        <input
          className="form-control"
          placeholder="City"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        {errors.city && <p className="error">{errors.city.message}</p>}

        <select
          className="form-select form-control"
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option>Select a state</option>
          <option>FL</option>
          <option>NY</option>
          <option>AL</option>
          <option>CA</option>
          <option>TX</option>
        </select>

        <input
          className="form-control"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}
        <input
          className="form-control"
          placeholder="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {confirmReg ? <p className="success">{confirmReg}</p> : null}
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword.message}</p>
        )}
        <button className="btn btn-info signUpBtn">Register</button>
        <hr />
        <Link className="register__link" to="/login">
          Already Have an Account? Login Here.
        </Link>
      </form>
    </div>
  );
};

export default AccountForm;
