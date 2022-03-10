import { navigate } from "@reach/router";
import { useState } from "react";
import Nav from "./Nav"
import axios from "axios"

const OrderForm = (props) => {
    
    const[method, setMethod]= useState("Pickup");
    const[burritoType, setBurritoType] = useState("Bowl");
    const[qty, setQty] = useState("1");
    const[checkedToppingOne, setCheckedToppingOne]=useState(false);
    const[toppingOne, setToppingOne] = useState("");
    const[checkedToppingTwo, setCheckedToppingTwo]=useState(false);
    const[toppingTwo, setToppingTwo] = useState("");
    const[checkedToppingThree, setCheckedToppingThree]= useState(false)
    const[toppingThree, setToppingThree] = useState("");
    const{id}=props;
    const {onSubmitProp, errors} = props;

    const handleToggleToppingOne = () => {
        setCheckedToppingOne(!checkedToppingOne);
        if(checkedToppingOne === true){
            setToppingOne("");
        }else if(checkedToppingOne===false){
            setToppingOne("Steak")
        }
    }

    const handleToggleToppingTwo = () => {
        setCheckedToppingTwo(!checkedToppingTwo);
        if(checkedToppingTwo === true){
            setToppingTwo("");
        }else if(checkedToppingTwo===false){
            setToppingTwo("White Rice")
        }
    }

    const handleToggleToppingThree = () => {
        setCheckedToppingThree(!checkedToppingThree);
        if(checkedToppingThree === true){
            setToppingThree("");
        }else if(checkedToppingThree===false){
            setToppingThree("Black Beans")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitProp({method, burritoType, qty, toppingOne, toppingTwo, toppingThree})
    }

    
    return (
        <div>
            <Nav/>
            <h2>BUILD YOUR BURRITO</h2>
            <div>
                <form onSubmit={handleSubmit}> 
                    <label>METHOD:</label>
                    <select value={method} onChange={(e)=> setMethod(e.target.value)}>
                        <option>Pickup</option>
                        <option>Delivery</option>
                    </select>
                    <label>BURRITO TYPE:</label>
                    <select value={burritoType} onChange={(e)=> setBurritoType(e.target.value)}>
                        <option>Bowl</option>
                        <option>Burrito</option>
                    </select>
                    <label>QTY:</label>
                    <select value={qty} onChange={(e)=> setQty(e.target.value)}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <label>TOPPINGS:</label>
                    <input type="checkbox" checked={checkedToppingOne}  onChange={handleToggleToppingOne} />Steak
                    <input type="checkbox" checked={checkedToppingTwo} onChange={handleToggleToppingTwo} />White Rice
                    <input type="checkbox" checked={checkedToppingThree} onChange={handleToggleToppingThree}/>Black Beans
                    <div>
                        <button type="submit">ADD TO ORDER</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default OrderForm;