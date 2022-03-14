import { navigate } from "@reach/router";
import { useState } from "react";
import Nav from "./Nav"
import axios from "axios"

const OrderForm = (props) => {
    const {onSubmitProp, initialMethod, initialBurritoType, initialQty, initialToppingOne, initialToppingTwo, initialToppingThree, initialToppingFour, initialToppingFive, initialToppingSix, initialToppingSeven, initialToppingEight, initialToppingNine, initialCheckedToppingOne, initialCheckedToppingTwo, initialCheckedToppingThree, initialCheckedToppingFour, initialCheckedToppingFive, initialCheckedToppingSix, initialCheckedToppingSeven, initialCheckedToppingEight, initialCheckedToppingNine } = props;
    const[method, setMethod]= useState(initialMethod);
    const[burritoType, setBurritoType] = useState(initialBurritoType);
    const[qty, setQty] = useState(initialQty);
    const[checkedToppingOne, setCheckedToppingOne]=useState(initialCheckedToppingOne);
    const[toppingOne, setToppingOne] = useState(initialToppingOne);
    const[checkedToppingTwo, setCheckedToppingTwo]=useState(initialCheckedToppingTwo);
    const[toppingTwo, setToppingTwo] = useState(initialToppingTwo);
    const[checkedToppingThree, setCheckedToppingThree]= useState(initialCheckedToppingThree)
    const[toppingThree, setToppingThree] = useState(initialToppingThree);
    const[checkedToppingFour, setCheckedToppingFour]= useState(initialCheckedToppingFour)
    const[toppingFour, setToppingFour] = useState(initialToppingFour);
    const[checkedToppingFive, setCheckedToppingFive]= useState(initialCheckedToppingFive)
    const[toppingFive, setToppingFive] = useState(initialToppingFive);
    const[checkedToppingSix, setCheckedToppingSix]= useState(initialCheckedToppingSix)
    const[toppingSix, setToppingSix] = useState(initialToppingSix);
    const[checkedToppingSeven, setCheckedToppingSeven]= useState(initialCheckedToppingSeven)
    const[toppingSeven, setToppingSeven] = useState(initialToppingSeven);
    const[checkedToppingEight, setCheckedToppingEight]= useState(initialCheckedToppingEight)
    const[toppingEight, setToppingEight] = useState(initialToppingEight);
    const[checkedToppingNine, setCheckedToppingNine]= useState(initialCheckedToppingNine)
    const[toppingNine, setToppingNine] = useState(initialToppingNine);
    

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
            setToppingTwo("Chicken")
        }
    }

    const handleToggleToppingThree = () => {
        setCheckedToppingThree(!checkedToppingThree);
        if(checkedToppingThree === true){
            setToppingThree("");
        }else if(checkedToppingThree===false){
            setToppingThree("White Rice")
        }
    }

    const handleToggleToppingFour = () => {
        setCheckedToppingFour(!checkedToppingFour);
        if(checkedToppingFour === true){
            setToppingFour("");
        }else if(checkedToppingFour===false){
            setToppingFour("Brown Rice")
        }
    }

    const handleToggleToppingFive = () => {
        setCheckedToppingFive(!checkedToppingFive);
        if(checkedToppingFive === true){
            setToppingFive("");
        }else if(checkedToppingFive===false){
            setToppingFive("Black Beans")
        }
    }

    const handleToggleToppingSix = () => {
        setCheckedToppingSix(!checkedToppingSix);
        if(checkedToppingSix === true){
            setToppingSix("");
        }else if(checkedToppingSix===false){
            setToppingSix("Pinto Beans")
        }
    }

    const handleToggleToppingSeven = () => {
        setCheckedToppingSeven(!checkedToppingSeven);
        if(checkedToppingSeven === true){
            setToppingSeven("");
        }else if(checkedToppingSeven===false){
            setToppingSeven("Corn")
        }
    }

    const handleToggleToppingEight = () => {
        setCheckedToppingEight(!checkedToppingEight);
        if(checkedToppingEight === true){
            setToppingEight("");
        }else if(checkedToppingEight===false){
            setToppingEight("Pico de gallo")
        }
    }

    const handleToggleToppingNine = () => {
        setCheckedToppingNine(!checkedToppingNine);
        if(checkedToppingNine === true){
            setToppingNine("");
        }else if(checkedToppingNine===false){
            setToppingNine("Cheese")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitProp({method, burritoType, qty, toppingOne, toppingTwo, toppingThree, toppingFour, toppingFive, toppingSix, toppingSeven, toppingEight, toppingNine})
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
                    <input type="checkbox" checked={checkedToppingTwo} onChange={handleToggleToppingTwo} />Chicken
                    <input type="checkbox" checked={checkedToppingThree} onChange={handleToggleToppingThree}/>White Rice
                    <input type="checkbox" checked={checkedToppingFour} onChange={handleToggleToppingFour}/>Brown Rice
                    <input type="checkbox" checked={checkedToppingFive} onChange={handleToggleToppingFive}/>Black Beans
                    <input type="checkbox" checked={checkedToppingSix} onChange={handleToggleToppingSix}/>Pinto Beans
                    <input type="checkbox" checked={checkedToppingSeven} onChange={handleToggleToppingSeven}/>Corn
                    <input type="checkbox" checked={checkedToppingEight} onChange={handleToggleToppingEight}/>Pico de Gallo
                    <input type="checkbox" checked={checkedToppingNine} onChange={handleToggleToppingNine}/>Cheese
                    <div>
                        <button type="submit">ADD TO ORDER</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default OrderForm;