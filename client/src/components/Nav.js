import { Link, navigate } from "@reach/router";
import logoGreen from "../images/305-burrito-green.png";
import axios from "axios";

const Nav = () => {
  const logout = (e) => {
    axios
      .post(
        "http://localhost:8000/api/accounts/logout",
        {},
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleNavigation = (e) => {
    if (e.target.name === "order") {
      navigate("/build_burrito");
    } else if (e.target.name === "home") {
      navigate("/home");
    } else if (e.target.name === "account") {
      navigate("/orders/:id");
    }
  };

  return (
    <nav>
      <img className="logo" src={logoGreen} alt="Restaurant Logo" />
      <div role="navigation" className="nav justify-content-end">
        <button
          name="home"
          className="btn btn-green"
          onClick={handleNavigation}
        >
          HOME
        </button>
        <button
          name="order"
          className="btn btn-green"
          onClick={handleNavigation}
        >
          ORDER
        </button>
        <button
          name="account"
          className="btn btn-green"
          onClick={handleNavigation}
        >
          ACCOUNT
        </button>
        <button className="btn btn-green" onClick={logout}>
          LOGOUT
        </button>
      </div>
    </nav>
  );
};

export default Nav;
