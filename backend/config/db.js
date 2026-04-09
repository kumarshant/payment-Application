const mongoose =require('mongoose');

const connectdb= async ()=>{
    try{
         await mongoose.connect(process.env.MONG0_URL);
         console.log("db connected !");
    }
    catch(err){
         console.log(err.message);
         process.exit(1);
    }
}

module.exports= connectdb;