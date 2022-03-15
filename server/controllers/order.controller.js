const Order = require("../models/order.model");
const jwt = require("jsonwebtoken");
const Account = require("../models/account.model")

module.exports.findAllOrders = (req, res) => {
    Order.find()
      .populate("createdBy", "firstName email")
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
    const newOrderObject = new Order(req.body);
    // const decodedJWT = jwt.decode(req.cookies.accounttoken, {
    //   complete: true
    // })

    //This works because of variable added on jwt.config.js
    newOrderObject.createdBy = req.jwtpayload.id;

    // newOrderObject.createdBy = decodedJWT.payload.id

    newOrderObject.save()
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

  module.exports.findAllOrdersBy = (req, res)=> {
    if(req.jwtpayload.firstName !== req.params.firstName){
      Account.findOne({firstName: req.params.firstName})
        .then((accountNotLoggedIn)=>{
          Order.find({createdBy: accountNotLoggedIn._id})
            .populate("createdBy", "firstName")
            .then((allOrdersfromAccount)=> {
              console.log(allOrdersfromAccount);
              res.json(allOrdersfromAccount);
            })
            .catch((err)=>{
              console.log(err);
              res.status(400).json(err);
            })
        })
        .catch((err)=>{
          console.log(err);
          res.status(400).json(err);
        })
    } else {
      Order.find({createdBy: req.jwtpayload.id})
        .populate("createdBy", "firstName")
        .then((allOrdersFromLoggedInAccount)=>{
          console.log(allOrdersFromLoggedInAccount);
          res.json(allOrdersFromLoggedInAccount);
        })
        .catch((err)=>{
          console.log(err);
          res.status(400).json(err);
        })
    }
  }
  