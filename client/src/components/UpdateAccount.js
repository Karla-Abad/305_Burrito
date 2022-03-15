import Nav from "./Nav";
import axios from "axios";
import { useEffect, useState } from "react";

const UpdateAccount = (props) => {
    const [account, setAccount]= useState();
    const [loaded, setLoaded]= useState(false);
    const {firstName}= props;
    const [accountOrderList, setAccountOrderList]= useState([])

    useEffect(()=> {
        axios.get("http//localhost:8000/api/accounts/secure", 
        {withCredentials:true}
        )
        .then((res) => {
            console.log(res.data);
            setAccount(res.data);
        })
        .catch((err)=> {
            console.log(err);
        })
    },[])

    useEffect(()=> {
        axios
            .get("http://localhost:8000/api/orders/"+firstName, 
            {withCredentials:true}
            )
            .then(res => {
                console.log(res.data);
                setAccountOrderList(res.data);
            })
            .catch(err => console.log(err))
    },[])

    return(
        <div>
            <Nav/>
            <h2>Account Info</h2>
            {loaded && (
            <div>
                <form>
                    <label>First Name:</label>
                    <input type="text" value={account.firstName}/>
                    <label>Last Name:</label>
                    <input type="text" value={account.lastName} />
                    <label>Address:</label>
                    <input type="text" value={account.address} />
                    <label>City:</label>
                    <input type="text" value={account.city} />
                    <label>State:</label>
                    <select value={account.state}>
                        <option>Select a state</option>
                        <option>FL</option>
                        <option>NY</option>
                        <option>AL</option>
                        <option>CA</option>
                        <option>TX</option>
                    </select>
                    <div>
                        <button>UPDATE</button>
                    </div>
                </form>
            </div>
            )}
            <div>
                <h2>Past Orders</h2>
                <div>
                    {
                        accountOrderList.map((order, index)=> (
                            <div key={index}>
                                <p>{order.burritoType} - {order.toppingOne}, {order.toppingTwo}, {order.toppingThree}, {order.toppingFour}, {order.toppingFive}, {order.toppingSix}, {order.toppingSeven}, {order.toppingEight}, {order.toppingNine}</p>
                                <hr/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default UpdateAccount;