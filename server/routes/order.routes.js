const OrderController = require("../controllers/order.controller");
module.exports = (app) => {
    app.get("/api/orders", OrderController.findAllOrders);
    app.post("/api/build_burrito", OrderController.createOrder);
    app.get("/api/your_order/:id", OrderController.findOrder);
    app.put("/api/your_order/:id", OrderController.updateOrder);
    app.delete("/api/your_order/:id", OrderController.deleteOrder);
};