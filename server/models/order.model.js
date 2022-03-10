const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    method: { 
        type: String,
        enum: ["Select a method", "Pickup", "Delivery"],
        default: "Select a method"
    },
    burritoType: {
        type: String,
        enum: ["Select a type", "Bowl", "Burrito"],
        default: "Select a type."
    },
    qty: {
        type: Number,
        min: 1,
        max: 3
    },
    toppingOne: {
        type: String
    },
    toppingTwo: {
        type: String
    },
    toppingThree: {
        type: String
    },
    },
    { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);

