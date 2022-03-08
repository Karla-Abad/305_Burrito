import { Link } from "@reach/router"

const Nav = ()=> {
    return(
        <div>
            <h1>305 BURRITO</h1>
            <div>
                <span><Link to="/register">HOME</Link></span>
                <span><Link to="/login">ORDER (0)</Link></span>
                <span><Link to="/register">ACCOUNT</Link></span>
                <span><Link to="/login">LOGOUT</Link></span>
            </div>
        </div>
    )
}

export default Nav;