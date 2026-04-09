const User = require('../models/user');
const bcrypt= require('bcrypt');

const getProfile= async (req, res)=>{
    
    try{
        const userProfile= await User.findById(req.user.id).select("-password");
    
        if(!userProfile){
           return res.status(404).json({message: "user not found ! "})
        }
       return res.status(200).json(userProfile);
    }
    catch(err){
       return res.status(500).json({error: err.message });
    }
  
}

const updatePassword = async(req, res)=>{
    const oldPassword= req.body.oldPassword;
    const newPassword= req.body.newPassword;

    try{
        const userProfile= await User.findById(req.user.id);
        if(!userProfile){
          return res.status(404).json({message: " user not found "});
        }
        if(! await bcrypt.compare(oldPassword , userProfile.password)){
           return res.status(404).json({message: "old password dont match "});
        }

        userProfile.password= await bcrypt.hash(newPassword, 10 );

       await userProfile.save(); 
        
       return  res.status(200).json({message: "updated password successfully !"});
    }
    catch (err){
      return res.status(500).json({error: err.message });
    }
}

const getUserByNumber= async(req, res)=>{
    // we can either get id or mobile number 
    const {mobileNumber}= req.body;
    try{
       const userProfile = await User.findOne({mobileNumber}).select("-password -email");
       if(!userProfile){
       return res.status(404).json({message: "user do not exist !"});
       }
     return  res.status(200).json(userProfile);

    }
    catch(err){
       return  res.status(500).json({error: err.message});
    }
}

module.exports={getProfile, updatePassword, getUserByNumber};