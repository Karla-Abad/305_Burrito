import React from 'react';
import { navigate, Link } from "@reach/router";

const PurchaseConfirmation = () => {
    function confirmationNumber(number) {
        return Math.floor(Math.random()*number)
    }

    return(
        <div>
            <h2>Thank you for purchasing from 305 Burrito!</h2>
            <h3>Confirmation # {confirmationNumber(1000000)}</h3>
            <div>
                <button className='btn btn-info loginBtn' onClick={(e)=>navigate("/home")}>Home</button>
            </div>
        </div>
    )
}

export default PurchaseConfirmation;