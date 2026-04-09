const User= require('../models/user');
const Account=require('../models/account');

const bcrypt= require('bcrypt');

const generateToken= require('../utils/generateToken')

exports.registerUser= async (req, res)=>{
    
    const{name , email, password, mobileNumber} = req.body;

    const userExist = await User.findOne({mobileNumber});
    if(userExist){
        return res.status(400).json({
            message:"user already exists "
        });
    }

    const hashedpassword= await bcrypt.hash(password,10);

    const user = await User.create({
          name,
          email,
         password: hashedpassword,
         mobileNumber
    });
    
    const account= await Account.create({
        userId: user._id
    })

    res.json({
          _id: user._id,
        accountId:account._id,
        name: user.name,
        email: user.email,
        number:user.mobileNumber,
        token: generateToken(user._id)
    })
}

exports.loginUser = async(req, res)=>{
    const {mobileNumber, password} = req.body;

    const user=await User.findOne({mobileNumber});
    if(user && await bcrypt.compare(password,user.password)){
        res.json({
        token: generateToken(user._id)
        })
    }
    else{
        res.status(201).json({msg: "user not found "})
    }
}