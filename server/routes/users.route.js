const router = require('express').Router();
const Users = require('../models/users.model');
const bcrypt = require('bcrypt');
const saltRound = 12;

router.route(':/register')
.post((req, res)=>{
    const {
        email,
        password,
        firstname,
        lastname,
        mobile,
        facebookprofile,
        usertype
    } = req.body;

    const User = new Users({
        email, 
        password: bcrypt.hashSync(password, saltRound),
        firstname,
        lastname,
        mobile,
        facebookprofile,
        usertype
    });

    User.save()
    .then(data=>res.send(data))
    .catch(err=>res.send("Registration faild. Please try with a different email and mobile number"))
})
