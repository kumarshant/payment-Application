const express = require('express');
const router= express.Router();

const {transferMoney, transactionHistory, getTransactionById} = require('../controller/transactionController')

router.post("/transfer", transferMoney);
router.get("/history", transactionHistory);
router.get("/", getTransactionById);



module.exports= router;

// POST /transactions/transfer
// GET /transactions/history
// GET /transactions/:id