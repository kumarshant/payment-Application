const express = require('express');
const router= express.Router();

const {getBalance, depositMoney, withdrawMoney, myAccount} = require('../controller/accountController');

router.get("/balance", getBalance);
router.post("/deposit", depositMoney);
router.post("/withdraw", withdrawMoney);
router.get("/myAccount", myAccount);



module.exports= router

// GET /accounts/balance
// POST /accounts/deposit
// POST /accounts/withdraw
// GET /accounts/me  accountId
// balance
// createdAt
// status