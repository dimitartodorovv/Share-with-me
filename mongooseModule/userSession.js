const mongoose = require("mongoose");

const userSessionSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
    hashPassword: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("sessionSM", userSessionSchema);