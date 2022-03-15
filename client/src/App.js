import React, { useState } from 'react';
import {Router} from "@reach/router"
import './App.css';
import AccountForm from './components/AccountForm';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import UpdateAccount from './components/UpdateAccount';
import OrderList from './components/OrderList';
import PurchaseConfirmation from './components/PurchaseConfirmation';
import axios from 'axios';
import { navigate, Link } from "@reach/router";
import New from './components/New';
import Fav from './components/Fav';
import Surprise from './components/Surprise';


const App=() => {
  const [orders,setOrders] = useState([]);
  const[errors, setErrors] = useState({});

  const removeFromDom = orderId => {
    setOrders(orders.filter(order => order._id !== orderId))
  }

  const createOrder = (order) => {
    axios
    .post("http://localhost:8000/api/build_burrito", order)
    .then(res => {
        setOrders([...orders, res.data])
        navigate("/your_order/"+res.data._id)
    })
    .catch(err => {
        console.log(err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
    })
}



  return (
    <div className="App">
     <Router>
       <AccountForm path="/accounts/register" default/>
       <Home path="/home" />
       <LoginForm path="/login" />
       <UpdateAccount path="/orders/:firstName" />
       <New path="/build_burrito"/>
       <Fav path="/build_fav"/>
       <Surprise path="/build_surprise" />
       <OrderList path="/your_order/:id" orders={orders} setOrders={setOrders}  removeFromDom={removeFromDom} />
       <PurchaseConfirmation path="/purchase_confirmation" />
     </Router>
    </div>
  );
}

export default App;
