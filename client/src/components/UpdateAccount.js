import Nav from "./Nav";
import axios from "axios";
import { useEffect, useState } from "react";
import OrderList from "./OrderList";



const UpdateAccount = (props) => {
    const [account, setAccount]= useState({});
    const [loadedAccount, setLoadedAccount]= useState(false);
    const [accountOrderList, setAccountOrderList]= useState([]);
    const [errors, setErrors]= useState({});
    const [loadedOrders, setLoadedOrders]= useState(false);

    useEffect(()=> {
        axios
        .get("http://localhost:8000/api/accounts/secure", 
        {withCredentials:true}
        )
        .then((res) => {
            console.log(res.data);
            setAccount(res.data);
            setLoadedAccount(true);
        })
        .catch((err)=> {
            console.log(err);
        })
    },[])

    const handleInputChange = (e)=>{
        console.log("name: "+ e.target.name);
        console.log("value: "+ e.target.value);
        let tempAccount = {...account};
        tempAccount[e.target.name]= e.target.value
        setAccount(tempAccount)
    }

    const updateAccount = (e)=> {
        e.preventDefault();
        axios
        .put("http://localhost:8000/api/accounts/"+account._id, {
            firstName: account.firstName,
            lastName: account.lastName,
            address: account.address,
            city: account.city,
            state: account.state
        })
        .then((res)=> {
            console.log(res);
            console.log(res.data);
        })
        .catch(err => {
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
          })

    }

    useEffect(()=> {
        console.log("account:");
        console.log(account);
        if(account.firstName === undefined){
            return;
        }
        axios
            .get("http://localhost:8000/api/orders/"+account._id, 
            {withCredentials:true}
            )
            .then(res => {
                console.log(res.data);
                setAccountOrderList(res.data);
                setLoadedOrders(true);
            })
            .catch(err => console.log(err))
    },[loadedAccount])

    return(
        <div>
            <Nav/>
            <div className="flex">
            {loadedAccount && (
            <div className="updateAccountDiv">
                <h2>Account Details</h2>
                <form onSubmit={updateAccount}>
                    <div className="flex accountDetails">
                        <label className="flexLabel" >First Name:</label>
                        <input className='form-control flexInput' type="text" name="firstName" value={account.firstName} onChange={(e)=> handleInputChange(e)} />  
                        {errors.firstName && <p className="validations">{errors.firstName.message}</p>}
                    </div>
                    <div className="flex accountDetails">
                        <label className="flexLabel">Last Name:</label>
                        <input className='form-control flexInput' type="text" name="lastName" value={account.lastName} onChange={(e)=> handleInputChange(e)} />
                        {errors.lastName && <p className="validations">{errors.lastName.message}</p>}
                    </div>
                    <div className="flex accountDetails">
                        <label className="flexLabel">Address:</label>
                        <input className='form-control flexInput' type="text" name="address" value={account.address} onChange={(e)=> handleInputChange(e)} />
                        {errors.address && <p className="validations">{errors.address.message}</p>}
                    </div>
                    <div className="flex accountDetails">
                        <label className="flexLabel">City:</label>
                        <input className='form-control flexInput' type="text" name="city" value={account.city} onChange={(e)=> handleInputChange(e)} />
                        {errors.city && <p className="validations">{errors.city.message}</p>}
                    </div>
                    <div className="flex accountDetails">
                        <label className="flexLabel">State:</label>
                        <select className="form-select form-select-sm flexInput" name="state" value={account.state} onChange={(e)=> handleInputChange(e)}>
                            <option>Select a state</option>
                            <option>FL</option>
                            <option>NY</option>
                            <option>AL</option>
                            <option>CA</option>
                            <option>TX</option>
                        </select>
                    </div>
                    <div className="updateBtn">
                        <button className="btn btn-info loginBtn">UPDATE</button>
                    </div>
                </form>
            </div>
            )}
            <div className="updateAccountDiv">
                
                {loadedOrders && (
                <div>
                    <h2>Past Orders</h2>
                    {
                        accountOrderList.map((orderList, index)=> (
                            <div key={index}>
                                <p><input className="form-check-input" type="checkbox"/> Favorite</p>   
                                <span>{orderList.burritoType}- </span>
                                {orderList.steak===true &&<span>Steak, </span>}  
                                {orderList.chicken===true &&<span>Chicken, </span>}  
                                {orderList.whiteRice===true &&<span>White Rice, </span>} 
                                {orderList.brownRice===true &&<span>Brown Rice, </span>}
                                {orderList.blackBeans===true &&<span>Black Beans, </span>} 
                                {orderList.pintoBeans===true &&<span>Pinto Beans, </span>} 
                                {orderList.lettuce===true &&<span>Lettuce, </span>} 
                                {orderList.corn===true &&<span>Corn, </span>} 
                                {orderList.cheese===true &&<span>Cheese, </span>}
                                {orderList.picoDeGallo===true &&<span>Pico de Gallo, </span>}
                                {orderList.onions===true &&<span>Onions, </span>}
                                {orderList.guacamole===true &&<span>Guacamole, </span>}
                                <hr/>
                            </div>
                        ))
                    }
                </div>
                )}
            </div>
            </div>
        </div>
    )
}

export default UpdateAccount;