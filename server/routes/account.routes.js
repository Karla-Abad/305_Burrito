const AccountController = require("../controllers/account.controller");
module.exports = (app) => {
    app.get("/api/accounts", AccountController.findAllAccounts);
    app.post("/api/register", AccountController.createAccount);
    app.get("/api/accounts/:id", AccountController.findAccount);
    app.put("/api/accounts/:id", AccountController.updateAccount);
    app.delete("/api/accounts/:id", AccountController.deleteAccount);
};