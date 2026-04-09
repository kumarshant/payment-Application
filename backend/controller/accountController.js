const Account= require('../models/account');
const User=require('../models/user');

const getBalance = async (req,res)=>{
     const userId= req.user.id;
     try{
        const accountinfo= await Account.findOne({userId});
         if(!accountinfo){
            return res.status(201).json({
                message:"could not find any account "
            });
         }

         res.status(200).json({
            balance: accountinfo.balance
         });
        
     }catch(err){
        return res.status(404).json({err: err.message});
     }
}
const depositMoney=  async (req,res)=>{
  const userId= req.user.id;
  const {depositAmount}= req.body;
  if(depositAmount<=0){
    return res.status(204).json({
        message:"not a valid amount "
    })
  }
     try{
        const accountinfo= await Account.findOne({userId});
         if(!accountinfo){
            return res.status(201).json({
                message:"could not find any account "
            });
         }
         accountinfo.balance += depositAmount;
         
         await accountinfo.save();
        return res.status(200).json({
            message:`${depositAmount} amount credited `,
            current_balance: accountinfo.balance
        })
        
     }catch(err){
        return res.status(404).json({err: err.message});
     }
} 
const withdrawMoney=  async (req,res)=>{
      const userId= req.user.id;
      const {withdrawAmount}= req.body;
     try{
        const accountinfo= await Account.findOne({userId});
        if(!accountinfo){
            return res.status(201).json({
                message:"account does not exist"
            })
        }
        if(withdrawAmount<=0 || withdrawAmount>accountinfo.balance){
            return res.status(201).json({
                message:"invalid amount !"
            })
        }
        accountinfo.balance -= withdrawAmount;
        await accountinfo.save();
        res.status(200).json({
              message:`${withdrawAmount} amount debited `,
            current_balance: accountinfo.balance
        })
        
     }catch(err){
        return res.status(404).json({err: err.message});
     }
  } 

const myAccount= async (req,res)=>{
       const userId= req.user.id;
     try{
        const accountinfo= await Account.findOne({userId});
        if(!accountinfo){
            return res.status(201).json({
                message:"account does not exist"
            })
        }
        res.status(200).json({
            accountinfo
        })
        
     }catch(err){
        return res.status(404).json({err: err.message});
     }
}

module.exports={getBalance, depositMoney, withdrawMoney, myAccount}