require("dotenv").config();
const express = require("express");
const cors = require("cors")
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

require("./config/mongoose.config")
require("./routes/account.routes")(app);
require("./routes/order.routes")(app);
app.listen(process.env.MY_PORT, ()=> {console.log(`Express server running on port ${process.env.MY_PORT}`)});