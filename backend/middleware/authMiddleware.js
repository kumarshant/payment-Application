const jwt = require('jsonwebtoken');
const User= require('../models/user');

const protect= async (req, res, next)=>{
       let Token;

       if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
            Token = req.headers.authorization.split(" ")[1];

       try{

            const decoded= jwt.verify(Token, process.env.JWT_SECRET);
            req.user = decoded;
             next();
       }
       catch(err){
          res.status(401).json({
            msg: "not authorized "
          });
       }
    }
    else{
        res.status(201).json({
            msg: "no token !"
        })
    }
}

module.exports = protect;