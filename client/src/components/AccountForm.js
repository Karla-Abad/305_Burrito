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
            <div className="flex loginHeader">
                <h1 className="title">305 BURRITO</h1>
                <Link to="/login">Already Have an Account? Login</Link>
            </div>
            <h2>Sign Up!</h2>
            <h2> Create your Account.</h2>
            <form  onSubmit={handleSubmit}>
                <div className="signUpDiv">
                    <div className="flex signUpDiv">
                        <label className='form-label flexSignUpLabel'>First Name:</label>
                        <input className='form-control flexSignUpInput' type="text" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
                    </div>
                    {errors.firstName && <p className="validations">{errors.firstName.message}</p>}
                    <div className="flex signUpDiv">
                        <label className='form-label flexSignUpLabel'>Last Name:</label>
                        <input className='form-control flexSignUpInput' type="text" value={lastName} onChange={(e)=> setLastName(e.target.value)} />
                    </div>
                    {errors.lastName && <p className="validations">{errors.lastName.message}</p>}
                
                <div className="flex signUpDiv">
                    <label className='form-label flexSignUpLabel'>Email:</label>
                    <input className='form-control flexSignUpInput' type="text" value={email} onChange={(e)=> setEmail(e.target.value)} />
                </div>
                {errors.email && <p className="validations">{errors.email.message}</p>}
                <div className="flex signUpDiv">
                    <label className='form-label flexSignUpLabel'>Address:</label>
                    <input className='form-control flexSignUpInput' type="text" value={address} onChange={(e)=> setAddress(e.target.value)} />
                </div>
                {errors.address && <p className="validations">{errors.address.message}</p>}
                <div className="flex signUpDiv">
                    <label className='form-label flexSignUpLabel'>City:</label>
                    <input className='form-control flexSignUpInput' type="text" value={city} onChange={(e)=> setCity(e.target.value)} />
                </div>
                {errors.city && <p className="validations">{errors.city.message}</p>}
                <div className="flex signUpDiv">
                    <label className='form-label flexSignUpLabel'>State:</label>
                    <select className="form-select form-select-sm flexSignUpInput" value={state} onChange={(e)=> setState(e.target.value)}>
                        <option>Select a state</option>
                        <option>FL</option>
                        <option>NY</option>
                        <option>AL</option>
                        <option>CA</option>
                        <option>TX</option>
                    </select>
                </div>
                <div className="flex signUpDiv">
                    <label className='form-label flexSignUpLabel'>Password:</label>
                    <input className='form-control flexSignUpInput' type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                </div>
                {errors.password && <p className="validations">{errors.password.message}</p>}
                <div className="flex signUpDiv">
                    <label className='form-label flexSignUpLabel'>Confirm Password:</label>
                    <input className='form-control flexSignUpInput' type="password" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} />
                </div>
                {confirmReg ? <p className="regMessage">{confirmReg}</p>: null}
                {errors.confirmPassword && <p className="validations">{errors.confirmPassword.message}</p>}
                </div>
                <div>
                    <button className='btn btn-info signUpBtn'>Sign Up</button>
                </div>
            </form>
            
        </div>
    )
}

export default AccountForm;