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

    let price = order.qty*9.50;
    let toppingPrice = order.qty*0.50;
    let deliveryFee =5.00;
    let toppingsArray = [order.steak, order.chicken, order.whiteRice, order.brownRice, order.blackBeans, order.pintoBeans, order.lettuce, order.corn, order.cheese, order.picoDeGallo, order.guacamole, order.onions]
    for (let i=0; i<toppingsArray.length; i++){
        if (toppingsArray[i] === true){
            price = Math.floor((price + toppingPrice)*100)/100;
        } 
    }
    
    let taxFee = Math.floor((price+deliveryFee)*0.07*100)/100;
    let total = price + deliveryFee + taxFee;

    return(
        <div>
            <Nav/>
            <h2 className="orderDetails">YOUR ORDER</h2>
            <div className="orderDetails">
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
            </div>
            <div className="orderTotals">         
                <p>PRICE:${price}</p>
                <p>DELIVERY FEE:$ {deliveryFee}</p>
                <p>TAX:${taxFee}</p>
                <hr/>
                <p>TOTAL:${total}</p>
            </div> 
            <div>
                <button className="btn btn-dark loginBtn" onClick={(e)=> {handleDelete(order._id)}}>START OVER</button>
                <button className="btn btn-info loginBtn" onClick={(e)=> navigate("/purchase_confirmation")}>PURCHASE</button>
            </div>
            
        </div>
    )
}

export default OrderList;