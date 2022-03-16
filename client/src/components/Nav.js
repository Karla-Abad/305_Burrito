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
    
    return(
        <div className="flex" >
            <h1 className="title">305 BURRITO</h1>
            <div role="navigation" className="nav justify-content-end">
                <span className="nav-link"><Link to="/home">HOME</Link></span>
                <span className="nav-link"><Link to="/build_burrito">ORDER (0)</Link></span>
                <span className="nav-link"><Link to="/orders/:firstName">ACCOUNT</Link></span>
                <button className="btn btn-light" onClick={logout}>LOGOUT</button>
                {/* <span><Link to="/login">LOGOUT</Link></span> */}
            </div>
        </div>
    )
}

export default Nav;