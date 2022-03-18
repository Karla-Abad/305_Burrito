import { navigate } from "@reach/router";
import { useState } from "react";
import Nav from "./Nav"
import axios from "axios"

const OrderForm = (props) => {
    const {order, setOrder, onSubmitProp} = props;    
    const handleInputChange = (e)=>{
        console.log("name: "+ e.target.name);
        console.log("value: "+ e.target.value);
        let tempOrder = {...order};
        tempOrder[e.target.name]= e.target.value
        setOrder(tempOrder)
    }

    const handleCheckedChange = (e) => {
        console.log("name: "+ e.target.name);
        console.log("checked: "+ e.target.checked);
        let tempOrder = {...order};
        tempOrder[e.target.name]= e.target.checked;
        setOrder(tempOrder)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitProp(order);
    }

    
    return (
        <div >
            <Nav/>
            <h2>BUILD YOUR BURRITO</h2>
            <div>
                <form onSubmit={handleSubmit}> 
                    <div className="selectDiv" >
                        <label>METHOD:</label>
                        <select className="form-select form-select-lg mb-3"  name="method" value={order.method} onChange={(e)=> handleInputChange(e)}>
                            <option>Pickup</option>
                            <option>Delivery</option>
                        </select>
                    </div>
                    <div className="selectDiv">
                        <label>BURRITO TYPE:</label>
                        <select className="form-select form-select-lg mb-3"  name="burritoType" value={order.burritoType} onChange={(e)=> handleInputChange(e)}>
                            <option>Bowl</option>
                            <option>Burrito</option>
                        </select>
                        <label>QTY:</label>
                        <select className="form-select form-select-lg mb-3" name="qty" value={order.qty} onChange={(e)=> handleInputChange(e)}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                    <div className="flex justifyContent">
                        <div className="textAlign">
                            <label>TOPPINGS:</label>
                        </div>
                        <div className="textAlign">
                            <div>
                                <input className="form-check-input" name="steak" type="checkbox" checked={order.steak}  onChange={handleCheckedChange} />Steak
                            </div>
                            <div>
                                <input className="form-check-input" name="chicken" type="checkbox" checked={order.chicken} onChange={handleCheckedChange} />Chicken
                            </div>
                            <div>
                                <input className="form-check-input" name="whiteRice" type="checkbox" checked={order.whiteRice} onChange={handleCheckedChange}/>White Rice
                            </div>
                            <div>
                                <input className="form-check-input" name="brownRice" type="checkbox" checked={order.brownRice} onChange={handleCheckedChange}/>Brown Rice
                            </div>
                            <div>
                            <input className="form-check-input" name="blackBeans" type="checkbox" checked={order.blackBeans} onChange={handleCheckedChange}/>Black Beans
                            </div>
                            <input className="form-check-input" name="pintoBeans" type="checkbox" checked={order.pintoBeans} onChange={handleCheckedChange}/>Pinto Beans
                        </div>
                        <div className="textAlign">
                            <div>
                                <input className="form-check-input" name="lettuce" type="checkbox" checked={order.lettuce} onChange={handleCheckedChange}/>Lettuce
                            </div>
                            <div>
                                <input className="form-check-input" name="corn" type="checkbox" checked={order.corn} onChange={handleCheckedChange}/>Corn
                            </div>
                            <div>
                                <input className="form-check-input" name="cheese" type="checkbox" checked={order.cheese} onChange={handleCheckedChange}/>Cheese
                            </div>
                            <div>
                                <input className="form-check-input" name="picoDeGallo" type="checkbox" checked={order.picoDeGallo} onChange={handleCheckedChange}/>Pico de Gallo
                            </div>
                            <div>
                            <input className="form-check-input" name="onions" type="checkbox" checked={order.onions} onChange={handleCheckedChange}/>Onions
                            </div>
                            <input className="form-check-input" name="guacamole" type="checkbox" checked={order.guacamole} onChange={handleCheckedChange}/>Guacamole
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-info loginBtn" type="submit">ADD TO ORDER</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default OrderForm;