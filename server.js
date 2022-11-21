const express = require("express") // to setup a backend, 'express' needs to be imported

const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");

const routes = require("./routes/ToDoRoutes"); // require router

const app = express() // assign an express object into the 'app' variable

const PORT = process.env.PORT | 3000;

app.use(express.json());
app.use(cors());
// app.use(cors({origin: "http://localhost:5000", credentials: true})); // added bc of an error

// connect to mongoose
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Mongodb Connected..."))
    .catch((err) => console.error(err));

/* Routing is not used for the MERN stack todo app exercise
// set up a route for the api
app.get("/api",(req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree", "userFour"]})// send json array
    // {"users": ["userOne", "userTwo", "userThree"]} is basically our backend api
})
*/
app.use(routes);


// start up the backeend
app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});

// start up the server
