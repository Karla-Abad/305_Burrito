const mongoose = require('mongoose');
const AccountSchema = new mongoose.Schema({
    firstName: { 
        type: String,
        required: [true, "First Name is required"],
        minlength:[3, "First Name must be at least 3 characters long"]
    },
    lastName: {
        type: String,
        required: [true, "Last Name is required"],
        minlength:[3, "Last Name must be at least 3 characters long"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    address: {
        type: String,
        required: [true, "Address is required"]
    },
    city: {
        type: String,
        required: [true, "City is required"]
    },
    state: {
        type: String,
        enum: ["FL", "NY", "AL", "CA", "TX", "Select a state"],
        default: "Select a state",
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength:[6, "Password must be at least 6 characters long"]
    },
    },
    { timestamps: true });

module.exports = mongoose.model('Account', AccountSchema);

