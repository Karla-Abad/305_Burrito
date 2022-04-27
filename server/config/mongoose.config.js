const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost/305_Burrito_db`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=> console.log(`Established a connection to the database called 305_Burrito_db.`))
    .catch(err => console.log("Something went wrong when connecting to the database.",err));