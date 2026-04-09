require('dotenv').config();

const express = require("express");
const app= express();
const port=process.env.PORT;

const connectdb= require('./config/db');
connectdb();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const protect=require('./middleware/authMiddleware');


const authRoute= require('./routes/authRoute');
const userRoute= require('./routes/userRoute');
const accountRoute= require('./routes/accountRoute');
// const transactionRoute= require('./routes/transactionRoute');


app.use("/api/auth", authRoute);
app.use("/api/user",protect, userRoute);
app.use("/api/account",protect, accountRoute );
// app.use("/api/transactions",protect, transactionRoute);

// app.use(err, req, res, next)
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Server Error"
  });
});

app.listen(port,()=>{
    console.log(`app is running on ${port}`);
})

