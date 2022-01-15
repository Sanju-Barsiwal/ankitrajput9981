const mongoose = require("mongoose");
const costumer = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    Phone:{
        type: Number,
        required:true,
        unique:true
    },
    Date:{
        type: Date
    },
    Time:
    {
        type:Time
    },
    Person: {
        type: Number
    }
})
// now we need to create collection

const Order  = new mongoose.model("Order",costumer);
module.exports = Order;
