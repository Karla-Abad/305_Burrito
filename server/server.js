require("dotenv").config();
const express = require("express");
const cors = require("cors")
const cookieParser = require("cookie-parser");
const app = express();
const port = 8000;

app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Configuring the server to accept and update cookies. Helps decode cookie's information.
app.use(cookieParser());

require("./config/mongoose.config")
require("./routes/account.routes")(app);
require("./routes/order.routes")(app);
app.listen(process.env.MY_PORT, ()=> {console.log(`Express server running on port ${process.env.MY_PORT}`)});