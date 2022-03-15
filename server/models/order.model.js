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
    steak: {
        type: Boolean,
        default: false
    },
    chicken: {
        type: Boolean,
        default: false
    },
    whiteRice: {
        type: Boolean,
        default: false
    },
    brownRice: {
        type: Boolean,
        default: false
    },
    blackBeans: {
        type: Boolean,
        default: false
    },
    pintoBeans: {
        type: Boolean,
        default: false
    },
    lettuce: {
        type: Boolean,
        default: false
    },
    corn: {
        type: Boolean,
        default: false
    },
    cheese: {
        type: Boolean,
        default: false
    },
    picoDeGallo: {
        type: Boolean,
        default: false
    },
    onions: {
        type: Boolean,
        default: false
    },
    guacamole: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account"
    }
    },
    { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);

