const mongoose= require('mongoose');
const {Account}= require('../models/account');


const transactionSchema= new mongoose.Schema({
   fromAccount:{
     type:mongoose.Schema.Types.ObjectId,
     ref:"Account",
     required:true,
   },
   toAccount:{
 type:mongoose.Schema.Types.ObjectId,
     ref:"Account",
     required:true,
   },
   amount:{
     type: string ,
     required:true
   },
   status:{
     type:string,
     enum:["pending","success","failed"],
     default:'pending'
   }
}, {timestamp:true});

module.exports= mongoose.model("Transaction", transactionSchema);