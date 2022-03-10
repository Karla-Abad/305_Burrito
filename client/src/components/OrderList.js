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
            <p>Toppings:</p>
            <ol>
                <li>{order.toppingOne}</li>
                <li>{order.toppingTwo}</li>
                <li>{order.toppingThree}</li>
            </ol>
            <p>PRICE:</p>
            <p>DELIVERY FEE:</p>
            <p>TAX:</p>
           
            <p>TOTAL:</p>
            <div>
                <button onClick={(e)=> {handleDelete(order._id)}}>START OVER</button>
                <button onClick={(e)=> navigate("/purchase_confirmation")}>PURCHASE</button>
            </div>
            
        </div>
    )
}

export default OrderList;