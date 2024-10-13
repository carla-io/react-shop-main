const express = require("express")
const app = express()
const connectDB = require("./config/connectDB")
const dotenv = require("dotenv").config();




app.get("/", (req,res) =>{
     res.send("Home page")
});
connectDB();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
});