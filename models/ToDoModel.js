const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    // write a property
    text: {
        type: String, 
        required: true
    }
})