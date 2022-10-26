import React from "react";
import { navigate, Link } from "@reach/router";
import Nav from "./Nav";

const PurchaseConfirmation = () => {
  function confirmationNumber(number) {
    return Math.floor(Math.random() * number);
  }

  return (
    <div className="orderConfirmation">
      <Nav />
      <div className="orderConfirmation__content success">
        <h2>Thank you for purchasing from 305 Burrito!</h2>
        <h3>Confirmation # {confirmationNumber(1000000)}</h3>
      </div>
    </div>
  );
};

export default PurchaseConfirmation;
