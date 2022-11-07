const express = require('express') // to setup a backend, 'express' needs to be imported
const app = express() // to create an app

// set up a route for the api
app.get("/api",(req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree", "userFour"]})// send json array
    // {"users": ["userOne", "userTwo", "userThree"]} is basically our backend api
})

// start up the backeend
app.listen(3000, () => {console.log("Server started on port 3000")})

// start up the server 