const AccountController = require("../controllers/account.controller");
module.exports = (app) => {
    app.post("/api/accounts/register", AccountController.register);
    app.post("/api/accounts/login", AccountController.login);
    app.post("/api/accounts/logout", AccountController.logout);
    app.get("/api/accounts/:id", AccountController.getOneAccount);
};