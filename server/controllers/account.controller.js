const Account = require("../models/account.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  register: (req, res)=> {
    const account = new Account(req.body);
    account.save()
      .then((newAccount)=> {
        console.log(newAccount);
        console.log("Successfully registered");
        res.json({
          successMessage: "Thank you for registering", 
          account: newAccount
        });
      })
      .catch((err)=>{
        console.log("registration not sucessful!!")
        res.status(400).json(err);
      })
  },

  updateAccount: (req, res)=> {
    Account.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
    .then(updatedAccount => res.json(updatedAccount))
    .catch(err => res.status(400).json({err}))
  },

  login: (req, res)=> {
    Account.findOne({email: req.body.email})
      .then((accountRecord)=>{
        //check if returned obj is null
        if(accountRecord === null){
          //email not found
          res.status(400).json({message: "Invalid login attempt!"})
        }else {
          //if email is found
          bcrypt.compare(req.body.password, accountRecord.password) //both salted 10 times and it will return a bolean t/f 
            .then((isPasswordValid)=>{
              if(isPasswordValid){
                console.log("password is valid");
                res.cookie(
                  "accounttoken",
                  jwt.sign(
                    {
                      //payload is the data we want to save
                      id: accountRecord._id,
                      email: accountRecord.email,
                      firstName: accountRecord.firstName
                    },
                    // wee need the scret key to sign the payload and make sure our information is secured.
                    "avna11kvab02sng04"
                  ),
                  {
                    //we will make sure these cookies are "httpOnly". This means that the cookes are essentially invisible to client-side JavaScript and can only be read by the server.
                    httpOnly: true,
                    expires: new Date(Date.now()+90000000)
                  },
                ).json({
                  message: "Successfully ",
                  accountLoggedIn: accountRecord.firstName,
                  accountId: accountRecord._id
                });
              } else {
                res.status(400).json({
                  message: "Invalid email and/or password."
                })
              }
       
            })
            .catch((err)=> {
              console.log(err);
              res.status(400).json({message: "Invalid attempt"});
            })
        }
      })
      .catch((err)=> {
        console.log(err);
        res.status(400).json({message: "Invalid attempt"})
      })
  },

logout: (req, res)=> {
  console.log("logging out");
  res.clearCookie("accounttoken");
  res.json({
    message: "You have successfully logged out.",
  })
},

getLoggedInAccount: (req, res) => {
  Account.findOne({_id: req.jwtpayload.id})
    .then(account => res.json(account))
    .catch(err => res.json(err))
},

findAllAccounts: (req, res)=> {
  Account.find()
    .then((allAccounts) => {
      res.json(allAccounts);
    })
    .catch((err)=>{
      console.log("Find All Accounts failed");
      res.json({messagee: "Something went wrong in findAll", error: err})
    })
}

}

