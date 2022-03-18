const OrderController = require("../controllers/order.controller");
const {authenticate} = require("../config/jwt.config")
module.exports = (app) => {
    app.get("/api/orders", OrderController.findAllOrders);
    app.post("/api/build_burrito", authenticate, OrderController.createOrder);
    app.get("/api/orders/:id", authenticate, OrderController.findAllOrdersBy);
    app.get("/api/your_order/:id", OrderController.findOrder);
    app.put("/api/your_order/:id", OrderController.updateOrder);
    app.delete("/api/your_order/:id", OrderController.deleteOrder);
};