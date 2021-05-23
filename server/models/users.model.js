const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:{type:String},
    email:{type:String}, 
    password:{type:String},
    firstname:{type:String},
    lastname:{type:String},
    mobile:{type:Number}
});


const Users = mongoose.model("User", UserSchema);

module.exports = Users;