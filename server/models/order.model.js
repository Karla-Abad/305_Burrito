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
    toppingFour: {
        type: String
    },
    toppingFive: {
        type: String
    },
    toppingSix: {
        type: String
    },
    toppingSeven: {
        type: String
    },
    toppingEight: {
        type: String
    },
    toppingNine: {
        type: String
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account"
    }
    },
    { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);

