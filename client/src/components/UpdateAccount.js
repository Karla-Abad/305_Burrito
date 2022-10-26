import Nav from "./Nav";
import axios from "axios";
import { useEffect, useState } from "react";
import OrderList from "./OrderList";

const UpdateAccount = (props) => {
  const [account, setAccount] = useState({});
  const [loadedAccount, setLoadedAccount] = useState(false);
  const [accountOrderList, setAccountOrderList] = useState([]);
  const [errors, setErrors] = useState({});
  const [loadedOrders, setLoadedOrders] = useState(false);
  const [updateConf, setUpdateConf] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/accounts/secure", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setAccount(res.data);
        setLoadedAccount(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleInputChange = (e) => {
    console.log("name: " + e.target.name);
    console.log("value: " + e.target.value);
    let tempAccount = { ...account };
    tempAccount[e.target.name] = e.target.value;
    setAccount(tempAccount);
  };

  const updateAccount = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/accounts/" + account._id, {
        firstName: account.firstName,
        lastName: account.lastName,
        address: account.address,
        city: account.city,
        state: account.state,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setErrors({});
        setUpdateConf("You have successfully updated this account.");
      })
      .catch((err) => {
        console.log(err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
        setUpdateConf("");
      });
  };

  useEffect(() => {
    console.log("account:");
    console.log(account);
    if (account.firstName === undefined) {
      return;
    }
    axios
      .get("http://localhost:8000/api/orders/" + account._id, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setAccountOrderList(res.data);
        setLoadedOrders(true);
      })
      .catch((err) => console.log(err));
  }, [loadedAccount]);

  return (
    <div className="updateAccount">
      <Nav />
      <div className="flex updateAccount__content">
        {loadedAccount && (
          <div className="updateAccount__content-left">
            <h2 className="home__heading updateAccount__heading">
              Account Details
            </h2>
            <form className="updateAccount__form" onSubmit={updateAccount}>
              <div className="flex accountDetails">
                <label className="accountDetails__label">First Name:</label>
                <input
                  className="form-control accountDetails__input"
                  type="text"
                  name="firstName"
                  value={account.firstName}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              {errors.firstName && (
                <p className="error">{errors.firstName.message}</p>
              )}
              <div className="flex accountDetails">
                <label className="accountDetails__label">Last Name:</label>
                <input
                  className="form-control accountDetails__input"
                  type="text"
                  name="lastName"
                  value={account.lastName}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              {errors.lastName && (
                <p className="error">{errors.lastName.message}</p>
              )}
              <div className="flex accountDetails">
                <label className="accountDetails__label">Address:</label>
                <input
                  className="form-control accountDetails__input"
                  type="text"
                  name="address"
                  value={account.address}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              {errors.address && (
                <p className="error">{errors.address.message}</p>
              )}
              <div className="flex accountDetails">
                <label className="accountDetails__label">City:</label>
                <input
                  className="form-control accountDetails__input"
                  type="text"
                  name="city"
                  value={account.city}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              {errors.city && <p className="error">{errors.city.message}</p>}
              <div className="flex accountDetails">
                <label className="accountDetails__label">State:</label>
                <select
                  className="form-control accountDetails__input"
                  name="state"
                  value={account.state}
                  onChange={(e) => handleInputChange(e)}
                >
                  <option>Select a state</option>
                  <option>FL</option>
                  <option>NY</option>
                  <option>AL</option>
                  <option>CA</option>
                  <option>TX</option>
                </select>
              </div>
              {updateConf && <p className="success">{updateConf}</p>}
              <button className="btn updateAccount__button">UPDATE</button>
            </form>
          </div>
        )}
        <div className="updateAccount__content-right">
          {loadedOrders && (
            <div>
              <h2 className="home__heading">Order History</h2>
              {accountOrderList.map((orderList, index) => (
                <div key={index}>
                  <p>
                    <input className="form-check-input" type="checkbox" />{" "}
                    Favorite
                  </p>
                  <span>{orderList.burritoType}- </span>
                  {orderList.steak === true && <span>Steak, </span>}
                  {orderList.chicken === true && <span>Chicken, </span>}
                  {orderList.whiteRice === true && <span>White Rice, </span>}
                  {orderList.brownRice === true && <span>Brown Rice, </span>}
                  {orderList.blackBeans === true && <span>Black Beans, </span>}
                  {orderList.pintoBeans === true && <span>Pinto Beans, </span>}
                  {orderList.lettuce === true && <span>Lettuce, </span>}
                  {orderList.corn === true && <span>Corn, </span>}
                  {orderList.cheese === true && <span>Cheese, </span>}
                  {orderList.picoDeGallo === true && (
                    <span>Pico de Gallo, </span>
                  )}
                  {orderList.onions === true && <span>Onions, </span>}
                  {orderList.guacamole === true && <span>Guacamole, </span>}
                  <hr />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateAccount;
