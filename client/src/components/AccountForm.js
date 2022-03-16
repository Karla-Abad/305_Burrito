import axios from "axios";
import React, {useState, useEffect} from 'react';
import { Link, navigate } from "@reach/router";

const AccountForm = (props) => {

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
    const [ confirmReg, setConfirmReg]= useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:8000/api/accounts/register", {
            firstName,
            lastName,
            email,
            address,
            city,
            state,
            password,
            confirmPassword
        }, {
            withCredentials:true
        })
        .then(res => {
            console.log(res.data);
            setFirstName("");
            setLastName("");
            setEmail("");
            setAddress("");
            setCity("");
            setState("");
            setPassword("");
            setConfirmPassword("");
            setAccounts([...accounts, res.data])
            setConfirmReg("Thank you for Registering, you can now log in!")
            setErrors({});
        })
        .catch(err => {
            console.log(err.response.data.errors);
            setErrors(err.response.data.errors);
        })
    }

    return(
        <div>
            <div className="flex">
                <h1 className="title">305 BURRITO</h1>
                <Link to="/login">Already Have an Account? Login</Link>
            </div>
            <h2>Sign Up!</h2>
            <h2> Create your Account.</h2>
            <form onSubmit={handleSubmit}>
                <div className="flexContent">
                    <div>
                        <label className='form-label'>First Name:</label>
                        <input className='form-control' type="text" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
                    </div>
                    {errors.firstName && <p>{errors.firstName.message}</p>}
                    <div>
                        <label className='form-label'>Last Name:</label>
                        <input className='form-control' type="text" value={lastName} onChange={(e)=> setLastName(e.target.value)} />
                    </div>
                    {errors.lastName && <p>{errors.lastName.message}</p>}
                </div>
                <label className='form-label'>Email:</label>
                <input className='form-control' type="text" value={email} onChange={(e)=> setEmail(e.target.value)} />
                {errors.email && <p>{errors.email.message}</p>}
                <label className='form-label'>Address:</label>
                <input className='form-control' type="text" value={address} onChange={(e)=> setAddress(e.target.value)} />
                {errors.address && <p>{errors.address.message}</p>}
                <div>
                    <label className='form-label'>City:</label>
                    <input className='form-control' type="text" value={city} onChange={(e)=> setCity(e.target.value)} />
                    {errors.city && <p>{errors.city.message}</p>}
                    <label>State:</label>
                    <select className="form-select form-select-sm" value={state} onChange={(e)=> setState(e.target.value)}>
                        <option>Select a state</option>
                        <option>FL</option>
                        <option>NY</option>
                        <option>AL</option>
                        <option>CA</option>
                        <option>TX</option>
                    </select>
                </div>
                <label className='form-label'>Password:</label>
                <input className='form-control' type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                {errors.password && <p>{errors.password.message}</p>}
                <label className='form-label'>Confirm Password:</label>
                <input className='form-control' type="password" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} />
                <div>
                    <button className="btn btn-success loginBtn">Sign Up</button>
                </div>
            </form>
            {confirmReg ? <p>{confirmReg}</p>: null}
        </div>
    )
}

export default AccountForm;