const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LotterySchema = new Schema({
    lotterynumber:{type:String},
    firstname:{type:String},
    lastname:{type:String},
    mobile:{type:String},
    registerationdate:{type:Date},    
    category:{type:String},
    facebookurl:{type:String},
    email:{type:String}, 
    userid: {type:String},
    status:{type:String}

}, {timestamps:true});

const Lottery = mongoose.model("Lottery", LotterySchema);

module.exports = Lottery;