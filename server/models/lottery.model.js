const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LotterySchema = new Schema({
    lotterynumber:{type:String, unique:true},
    valid:{type:Boolean},
    firstname:{type:String},
    lastname:{type:String},
    mobile:{type:String},
    registerationdate:{type:Date},    
    category:{type:String},
    facebookurl:{type:String},
    email:{type:String}, 
    userid: {type:String},
    winnerposition:{type:Number, unique:true}

}, {timestamps:true});

const Lottery = mongoose.model("Lottery", LotterySchema);

module.exports = Lottery;