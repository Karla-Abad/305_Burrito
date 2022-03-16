import React, {useState, useEffect} from 'react';
import {Link, navigate} from "@reach/router"
import axios from 'axios';

const LoginForm = (props)=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage]=useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/accounts/login", 
            {
                email: email,
                password: password,
            },
            {
                withCredentials:true,
            },)
            .then((res)=> {
                console.log(res, "res");
                console.log(res.data, "is res data!");
                navigate("/home")
            })
            .catch((err)=> {
                console.log(err.response.data);
                setErrorMessage(err.response.data.message);
            })
        
    }

    return(
        <div>
            <div className='flex'>
                <h1 className='title'>305 BURRITO</h1>
                <Link to="/accounts/register">Don't Have an Account? Register</Link>
            </div>
            <h2>Welcome Back!</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <div >
                        <label className='form-label'>Email:</label>
                        <input className='form-control' type="text" value={email} onChange={(e)=> setEmail(e.target.value)} />
                    </div>
                    <div>
                    <label className='form-label'>Password:</label>
                    <input className='form-control' type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                    </div>
                    {errorMessage && <p>{errorMessage}</p>}
                    <div>
                        <button type='submit' className='btn btn-info loginBtn'>Log In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;