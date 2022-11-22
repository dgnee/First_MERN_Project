const express = require("express") // to setup a backend, 'express' needs to be imported
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT | 5000;

const routes = require("./routes/ToDoRoutes"); // require router

// use express to do STH   
const app = express() // assign an express object into the 'app' variable

app.use(express.json());
app.use(cors());

// connect to mongoose
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Mongodb Connected..."))
    .catch((err) => console.error(err));

app.use(routes);

// start up the backeend
app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});
