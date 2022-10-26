import { navigate } from "@reach/router";
import Nav from "./Nav";
import One from "../images/One.jpg";
import Three from "../images/Three.jpg";
import Five from "../images/Five.jpg";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <h2 className="home__heading">QUICK OPTIONS</h2>
      <div className="home__content flex">
        <article className="home__options">
          <img className="home__image" src={One} alt="Burritos" />
          <p className="home__description">
            Select from our delicious options and create your customized
            Burrito!
          </p>
          <button
            className="btn btn-green home__btn"
            onClick={(e) => navigate("/build_burrito")}
          >
            NEW ORDER
          </button>
        </article>
        <article className="home__options">
          <img className="home__image" src={Three} alt="Burritos" />
          <p className="home__description">
            Save time and order your favorite option based on past orders.
          </p>
          <button
            className="btn btn-green home__btn"
            onClick={(e) => navigate("/build_fav")}
          >
            RE-ORDER MY FAV
          </button>
        </article>
        <article className="home__options">
          <img className="home__image" src={Five} alt="Burritos" />
          <p className="home__description">
            Do you feel adventourous today! Get your Burrito from our Favorite
            Options.
          </p>
          <button
            className="btn btn-green home__btn"
            onClick={(e) => navigate("/build_surprise")}
          >
            SURPRISE ME
          </button>
        </article>
      </div>
    </div>
  );
};

export default Home;
