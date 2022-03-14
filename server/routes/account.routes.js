const AccountController = require("../controllers/account.controller");
const {authenticate} = require("../config/jwt.config");

module.exports = (app) => {
    app.get("/api/allAccounts", AccountController.findAllAccounts);
    app.post("/api/accounts/register", AccountController.register);
    app.post("/api/accounts/login", AccountController.login);
    app.post("/api/accounts/logout", AccountController.logout);
    app.get("/api/accounts/secure", authenticate, AccountController.getLoggedInAccount);
};