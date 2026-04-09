const mongoose = require('mongoose');

const {User} = require('../models/user');

const accountSchema =new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    balance:{
        type:Number,
         required:true,
         default:5000
    },
    status: {
    type: String,
    enum: ["active", "suspended", "closed"],
    default: "active"
  }

}, { timestamps: true });

module.exports = mongoose.model('Account', accountSchema);