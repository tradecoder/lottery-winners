const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email:{type:String, unique:true}, 
    password:{type:String},
    firstname:{type:String},
    lastname:{type:String},
    mobile:{type:Number},
    facebookprofile:{type:String},
    usertype:{type:String}
}, {timestamps:true});


const Users = mongoose.model("User", UserSchema);

module.exports = Users;