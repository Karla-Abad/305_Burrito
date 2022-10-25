import { navigate } from "@reach/router";
import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "./Nav";

const Home = () => {
  return (
    <div>
      <Nav />
      <h2>QUICK OPTIONS</h2>
      <div className="flex">
        <div className="quickOptions">
          <p>
            Select from our delicious options and create your customized
            Burrito!
          </p>
          <button
            className="btn btn-dark loginBtn"
            onClick={(e) => navigate("/build_burrito")}
          >
            NEW ORDER
          </button>
        </div>
        <div className="quickOptions">
          <p>Save time and order your favorite option based on past orders.</p>
          <button
            className="btn btn-info loginBtn"
            onClick={(e) => navigate("/build_fav")}
          >
            RE-ORDER MY FAV
          </button>
        </div>
        <div className="quickOptions">
          <p>
            Do you feel adventourous today! Get your Burrito from our Favorite
            Options.
          </p>
          <button
            className="btn btn-dark loginBtn"
            onClick={(e) => navigate("/build_surprise")}
          >
            SURPRISE ME
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
