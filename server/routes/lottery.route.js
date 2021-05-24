const router =  require("express").Router();
const Lottery = require("../models/lottery.model");
const Users = require("../models/users.model");
const shortid = require ("shortid");


router.route("/new/:userid/:email")
.post((req, res)=>{    
    const {userid, email} = req.params;
    const {
        firstname,
        lastname,
        mobile,
        category,
        facebookurl
    } = req.body;
    const winnerposition = 0;

    const lotteryData = {
        lotterynumber: shortid.generate(),
        valid:false,
        firstname,
        lastname,
        mobile,
        category,
        facebookurl,
        userid,
        email,
        winnerposition
    }

    lotteryData.save()
    .then(()=>{
        res.send("Congratulations! You have got a new ticket! Please check your wallet for details. ")
    })
    .catch(err=>res.send("Request failed! Please try again after a while."))
    
})

router.route("/user/:userid/")
.get((req, res)=>{
    const {userid} = req.params;
    Lottery.find({userid}, {_id:0, lotterynumber:1, valid:1,facebookurl:1})
    .then((data)=>{
        res.send(data)
    })
    .catch(err=>res.send(err))
})

router.route("/all/:admin/:userid")
.get((req, res)=>{
    const {admin, userid} = req.params;
    // Although the user is logged in
    // to prevent any code injection 
    // applying an extra layer User match with admin permission to send all lottery data
    Users.find({_id:userid, type:admin})
    .then(user=>{
        if(user._id){            
        Lottery.find({}, (data)=>{
            res.send(data)
        })      

        } else {
            res.send("Request declined!")
        }
    })
    .catch(err=>res.send(err))
})