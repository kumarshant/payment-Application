const express= require('express');
const router=express.Router();

const {getProfile, updatePassword, getUserByNumber} = require('../controller/userController');


router.get("/me",getProfile);
router.patch("/me", updatePassword);
router.get("/search", getUserByNumber);


module.exports= router;