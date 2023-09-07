const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

//regular middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//cookie middleware
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send("Learning prisma");
})

app.listen(process.env.PORT,()=>{
    console.log("Port running");
})

module.exports = app;