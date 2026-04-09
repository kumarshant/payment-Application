const express= require('express');
const router=express.Router();

const {registerUser, loginUser} = require('../controller/authController')
const {authMiddleware} =require('../middleware/authMiddleware');


router.post('/login', loginUser);
router.post('/signup', registerUser);


module.exports= router;