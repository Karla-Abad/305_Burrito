import axios from "axios";
import { useEffect, useState } from "react";
import OrderForm from "./OrderForm";
import { navigate } from "@reach/router";

const Surprise = ({ randomOrder }) => {
  const [loaded, setLoaded] = useState(false);
  const [orders, setOrders] = useState([]);
  const [errors, setErrors] = useState({});
  const [order, setOrder] = useState({});

  console.log(randomOrder._id);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/your_order/${randomOrder._id}`)
      .then((res) => {
        console.log(res.data);
        setOrder(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const createOrder = (order) => {
    axios
      .post(
        "http://localhost:8000/api/build_burrito",
        {
          method: order.method,
          burritoType: order.burritoType,
          qty: order.qty,
          steak: order.steak,
          chicken: order.chicken,
          whiteRice: order.whiteRice,
          brownRice: order.brownRice,
          blackBeans: order.blackBeans,
          pintoBeans: order.pintoBeans,
          lettuce: order.lettuce,
          corn: order.corn,
          cheese: order.cheese,
          picoDeGallo: order.picoDeGallo,
          onions: order.onions,
          guacamole: order.guacamole,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        console.log(orders);
        setOrders([...orders, res.data]);
        navigate("/your_order/" + res.data._id);
      })
      .catch((err) => {
        console.log(err.response.data.err);
        setErrors(err.response.data.err);
      });
  };

  return (
    <div>
      {loaded && (
        <div>
          <OrderForm
            onSubmitProp={createOrder}
            errors={errors}
            order={order}
            setOrder={setOrder}
            setErrors={setErrors}
          />
        </div>
      )}
    </div>
  );
};

export default Surprise;
