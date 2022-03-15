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
        <div>
            <h1>305 BURRITO</h1>
            <div>
                <span><Link to="/home">HOME</Link></span>
                <span><Link to="/build_burrito">ORDER (0)</Link></span>
                <span><Link to="/orders/:firstName">ACCOUNT</Link></span>
                <button onClick={logout}>LOGOUT</button>
                {/* <span><Link to="/login">LOGOUT</Link></span> */}
            </div>
        </div>
    )
}

export default Nav;