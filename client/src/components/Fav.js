import axios from "axios";
import { useEffect, useState } from "react";
import OrderForm from "./OrderForm"
import { navigate } from "@reach/router";

const Fav = () => {
    const [order, setOrder]= useState();
    const [loaded, setLoaded]= useState(false);
    const [orders,setOrders] = useState([]);
    const[errors, setErrors] = useState({});

    useEffect(()=> {
        axios
        .get("http://localhost:8000/api/your_order/622b55b8c8d7b338e2520e95")
        .then(res=> {
            setOrder(res.data);
            setLoaded(true);
        })
        .catch(err=> console.log(err))
    },[])

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
        <div>
            {loaded && (
            <div>
                <OrderForm 
                onSubmitProp={createOrder} 
                errors={errors} 
                setErrors={setErrors} 
                initialMethod={order.method}
                initialBurritoType = {order.burritoType}
                initialQty = {order.qty}
                initialToppingOne = {order.toppingOne}
                initialToppingTwo = {order.toppingTwo}
                initialToppingThree = {order.toppingThree}
                initialToppingFour = {order.toppingFour}
                initialToppingFive = {order.toppingFive}
                initialToppingSix = {order.toppingSix}
                initialToppingSeven = {order.toppingSeven}
                initialToppingEight = {order.toppingEight}
                initialToppingNine = {order.toppingNine}
                initialCheckedToppingOne = {order.checkedToppingOne}
                initialCheckedToppingTwo = {order.checkedToppingTwo}
                initialCheckedToppingThree = {order.checkedToppingThree}
                initialCheckedToppingFour = {order.checkedToppingFour}
                initialCheckedToppingFive = {order.checkedToppingFive}
                initialCheckedToppingSix = {order.checkedToppingSix}
                initialCheckedToppingSeven = {order.checkedToppingSeven}
                initialCheckedToppingEight = {order.checkedToppingEight}
                initialCheckedToppingNine = {order.checkedToppingNine}
                
                />
            </div>
            )}
        </div>
    )
}

export default Fav;