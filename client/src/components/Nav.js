import { Link, navigate } from "@reach/router"
import axios from "axios";

const Nav = ()=> {

const logout =(e)=> {
    axios
    .post("http://localhost:8000/api/accounts/logout",
    {},
    {withCredentials:true},
    )
    .then((res)=> {
        console.log(res);
        console.log(res.data);
        navigate("/login")
    })
    .catch((err) => {
        console.log(err);
    })
}

const handleNavigation = (e) => {
    if (e.target.name === "order"){
        navigate("/build_burrito")
    } else if (e.target.name === "home"){
        navigate("/home");
    } else if (e.target.name === "account"){
        navigate("/orders/:id")
    }
}
    
    return(
        <div className="flex marginBottom" >
            <h1 className="title">305 BURRITO</h1>
            <div role="navigation" className="nav justify-content-end">
                <button name="home" className="btn btn-light" onClick={handleNavigation}>HOME</button>
                <button name="order" className="btn btn-light" onClick={handleNavigation}>ORDER (0)</button>
                <button name="account" className="btn btn-light" onClick={handleNavigation}>ACCOUNT</button>
                <button className="btn btn-light" onClick={logout}>LOGOUT</button>
            </div>
        </div>
    )
}

export default Nav;