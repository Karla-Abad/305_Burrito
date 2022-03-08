import axios from "axios";
import React, {useState} from 'react';
import { Link, navigate } from "@reach/router";

const AccountForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress]=useState("");
    const [city, setCity] = useState("");
    const [state, setState]= useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [accounts, setAccounts] = useState([]);
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:8000/api/register", {
            firstName,
            lastName,
            email,
            address,
            city,
            state,
            password,
            confirmPassword
        })
        .then(res => {
            setAccounts([...accounts, res.data])
            navigate("/home");
        })
        .catch(err => {
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
        })
    }

    return(
        <div>
            <div>
                <h1>305 BURRITO</h1>
                <Link to="/login">Already Have an Account? Login</Link>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label>First Name:</label>
                        <input type="text" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
                    </div>
                    {errors.firstName && <p>{errors.firstName.message}</p>}
                    <div>
                        <label>Last Name:</label>
                        <input type="text" value={lastName} onChange={(e)=> setLastName(e.target.value)} />
                    </div>
                    {errors.lastName && <p>{errors.lastName.message}</p>}
                </div>
                <label>Email:</label>
                <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} />
                {errors.email && <p>{errors.email.message}</p>}
                <label>Address:</label>
                <input type="text" value={address} onChange={(e)=> setAddress(e.target.value)} />
                {errors.address && <p>{errors.address.message}</p>}
                <div>
                    <label>City:</label>
                    <input type="text" value={city} onChange={(e)=> setCity(e.target.value)} />
                    {errors.city && <p>{errors.city.message}</p>}
                    <label>State:</label>
                    <select value={state} onChange={(e)=> setState(e.target.value)}>
                        <option>Select a state</option>
                        <option>FL</option>
                        <option>NY</option>
                        <option>AL</option>
                        <option>CA</option>
                        <option>TX</option>
                    </select>
                </div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                {errors.password && <p>{errors.password.message}</p>}
                <label>Confirm Password:</label>
                <input type="password" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} />
                <div>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default AccountForm;