import { navigate } from '@reach/router';
import React from 'react';
import Nav from './Nav';


const Home = () => {

    return(
        <div>
            <Nav/>
            <h1>QUICK OPTIONS</h1>
            <div>
                <p>Select from our delicious options and create your customized Burrito!</p>
                <button onClick={(e)=> navigate("/build_burrito")}>NEW ORDER</button>
            </div>
            <div>
                <p>Save time and order your favorite option based on past orders.</p>
                <button onClick={(e)=> navigate("/build_fav")}>RE-ORDER MY FAV</button>
            </div>
            <div>
                <p>Do you feel adventourous today! Get your Burrito from our Favorite Options.</p>
                <button onClick={(e)=> navigate("/build_burrito")}>SURPRISE ME</button>
            </div>
        </div>
    )
}

export default Home;