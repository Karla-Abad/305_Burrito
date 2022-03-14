import OrderForm from "./OrderForm"
import axios from "axios";
import React, {useState} from 'react';
import { navigate } from "@reach/router";

const New = () => {
    const [orders,setOrders] = useState([]);
    const[errors, setErrors] = useState({});
  
    // const removeFromDom = orderId => {
    //   setOrders(orders.filter(order => order._id !== orderId))
    // }
  
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
    return(
        <div>
            <OrderForm 
            onSubmitProp = {createOrder} 
            errors={errors} 
            setErrors={setErrors}
            initialMethod="Pickup"
            initialBurritoType = "Bowl"
            initialQty = "1"
            initialToppingOne = ""
            initialToppingTwo = ""
            initialToppingThree = ""
            initialToppingFour = ""
            initialToppingFive = ""
            initialToppingSix = ""
            initialToppingSeven = ""
            initialToppingEight = ""
            initialToppingNine = ""
            initialCheckedToppingOne = {false}
            initialCheckedToppingTwo = {false}
            initialCheckedToppingThree = {false}
            initialCheckedToppingFour = {false}
            initialCheckedToppingFive = {false}
            initialCheckedToppingSix = {false}
            initialCheckedToppingSeven = {false}
            initialCheckedToppingEight = {false}
            initialCheckedToppingNine = {false}
            />   
        </div>
    )
}

export default New;