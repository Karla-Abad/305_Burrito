import Nav from "./Nav";
import React, {useEffect, useState} from 'react';
import axios from "axios";
import { navigate, Link } from "@reach/router";

const OrderList =(props)=> {
    const[order,setOrder]= useState({});
    const{id, removeFromDom}= props;

    useEffect(()=> {
        axios
        .get("http://localhost:8000/api/your_order/"+id)
        .then(res => {
            console.log(res.data);
            setOrder(res.data);
        })
        .catch(err => console.log(err))
    },[])

    const handleDelete = (orderId) => {
        axios
        .delete("http://localhost:8000/api/your_order/"+orderId)
        .then(res => {
            removeFromDom(orderId)
            navigate("/build_burrito");
        })
        .catch((err)=> console.log(err))
    }

    return(
        <div>
            <Nav/>
            <h2>YOUR ORDER</h2>
            <p>METHOD: {order.method}</p>
            <p>Burrito Type: {order.burritoType}</p>
            <p>Qty: {order.qty}</p>
            <span>Toppings: </span>
                {order.steak===true &&<span>Steak, </span>}  
                {order.chicken===true &&<span>Chicken, </span>}  
                {order.whiteRice===true &&<span>White Rice, </span>} 
                {order.brownRice===true &&<span>Brown Rice, </span>}
                {order.blackBeans===true &&<span>Black Beans, </span>} 
                {order.pintoBeans===true &&<span>Pinto Beans, </span>} 
                {order.lettuce===true &&<span>Lettuce, </span>} 
                {order.corn===true &&<span>Corn, </span>} 
                {order.cheese===true &&<span>Cheese, </span>}
                {order.picoDeGallo===true &&<span>Pico de Gallo, </span>}
                {order.onions===true &&<span>Onions, </span>}
                {order.guacamole===true &&<span>Guacamole, </span>}            
            <p>PRICE:</p>
            <p>DELIVERY FEE:</p>
            <p>TAX:</p>
            <hr/>
            <p>TOTAL:</p>
            <div>
                <button onClick={(e)=> {handleDelete(order._id)}}>START OVER</button>
                <button onClick={(e)=> navigate("/purchase_confirmation")}>PURCHASE</button>
            </div>
            
        </div>
    )
}

export default OrderList;