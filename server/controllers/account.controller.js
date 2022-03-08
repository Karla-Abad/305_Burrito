const Account = require("../models/account.model");

module.exports.findAllAccounts = (req, res) => {
    Account.find()
      .then((allAccounts) => {
        console.log({ allAccounts });
        res.json({ allAccounts });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ err });
      });
  };
  
  module.exports.createAccount = (req, res) => {
    Account.create(req.body)
      .then((account) => res.json(account))
      .catch((err) => res.status(400).json({ err }));
  };
  
  module.exports.findAccount = (req, res) => {
    Account.findOne({_id: req.params.id})
    .then(account => res.json(account))
    .catch((err)=> res.status(400).json({err}))
  }
  
  module.exports.updateAccount = (req, res)=> {
    Account.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
      .then(updatedAccount => res.json(updatedAccount))
      .catch(err => res.status(400).json({err}))
  }
  
  module.exports.deleteAccount = (req, res)=> {
    Account.deleteOne({_id: req.params.id})
      .then(deleteConfirmation => res.json(deleteConfirmation))
      .catch((err)=> res.status(400).json({err}))
  }
  