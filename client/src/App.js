import React, { useState } from 'react';
import {Router} from "@reach/router"
import './App.css';
import AccountForm from './components/AccountForm';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import UpdateAccount from './components/UpdateAccount';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';
import PurchaseConfirmation from './components/PurchaseConfirmation';
import axios from 'axios';
import { navigate, Link } from "@reach/router";


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
        navigate("/your_order/:id")
    })
    .catch(err => {
        console.log(err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
    })
}


  return (
    <div className="App">
     <Router>
       <AccountForm path="/register"/>
       <Home path="/home" default/>
       <LoginForm path="/login" />
       <UpdateAccount path="/accounts/:id" />
       <OrderForm path="/build_burrito" onSubmitProp ={createOrder} errors={errors} setErrors={setErrors} />
       <OrderList path="/your_order/:id" orders={orders} setOrders={setOrders}  removeFromDom={removeFromDom} />
       <PurchaseConfirmation path="/purchase_confirmation" />
     </Router>
    </div>
  );
}

export default App;
