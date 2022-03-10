const Order = require("../models/order.model");

module.exports.findAllOrders = (req, res) => {
    Order.find()
      .then((allOrders) => {
        console.log({ allOrders });
        res.json({ allOrders });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ err });
      });
  };
  
  module.exports.createOrder = (req, res) => {
    Order.create(req.body)
      .then((order) => res.json(order))
      .catch((err) => res.status(400).json({ err }));
  };
  
  module.exports.findOrder = (req, res) => {
    Order.findOne({_id: req.params.id})
    .then(order => res.json(order))
    .catch((err)=> res.status(400).json({err}))
  }
  
  module.exports.updateOrder = (req, res)=> {
    Order.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
      .then(updatedOrder => res.json(updatedOrder))
      .catch(err => res.status(400).json({err}))
  }
  
  module.exports.deleteOrder = (req, res)=> {
    Order.deleteOne({_id: req.params.id})
      .then(deleteConfirmation => res.json(deleteConfirmation))
      .catch((err)=> res.status(400).json({err}))
  }
  