const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;
const userRoutes = require("./routes/users.route");
const lotteryRoutes =  require("./routes/lottery.route");

const mongoose = require('mongoose');
const mongoUri = process.env.MONGO_URI;
mongoose.connect(mongoUri, {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:true})
.then(()=>console.log("db connected!"))
.catch(()=>{mongoose.connection.close(); console.log("db connection failed")});


const app = express();
app.use(express.json());
app.use(cors()); 
app.use("/api/users/", userRoutes);
app.use("/api/lottery/", lotteryRoutes);


app.listen(port, ()=>{
    try{
        console.log("Server is on")
    }
    catch{
        console.log("Error on Server")
    }
})