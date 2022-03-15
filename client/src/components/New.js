import OrderForm from "./OrderForm"
import axios from "axios";
import React, {useState} from 'react';
import { navigate } from "@reach/router";

const New = () => {
    const [orders,setOrders] = useState([]);
    const[errors, setErrors] = useState({});
    const [order, setOrder] = useState({
                method:"Pickup",
                burritoType : "Bowl",
                qty : "1",
                steak: false,
                chicken: false,
                whiteRice: false,
                brownRice: false,
                blackBeans: false,
                pintoBeans: false,
                lettuce: false,
                corn: false,
                cheese: false,
                picoDeGallo: false,
                onions: false, 
                guacamole:false
                
    });
  
  
    const createOrder = (order) => {
      axios
      .post("http://localhost:8000/api/build_burrito", order,
      {withCredentials:true}
      )
      .then(res => {
          setOrders([...orders, res.data])
          navigate("/your_order/"+res.data._id)
      })
      .catch(err => {
          console.log(err.response.data.errors);
          setErrors(err.response.data.errors);
      })
  }
    return(
        <div>
            <OrderForm 
            onSubmitProp = {createOrder} 
            errors={errors} 
            order = {order}
            setOrder = {setOrder}
            setErrors={setErrors}
            />   
        </div>
    )
}

export default New;