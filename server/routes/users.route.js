const router = require('express').Router();
const Users = require('../models/users.model');
const bcrypt = require('bcrypt');
const saltRound = 12;

router.route('/register')
.post((req, res)=>{    
    const {
        email,
        password,
        firstname,
        lastname,
        mobile,
        facebookprofile,
        
    } = req.body;

    const User = new Users({
        email, 
        password: bcrypt.hashSync(password, saltRound),
        firstname,
        lastname,
        mobile,
        facebookprofile,
        usertype:"user"
    });

    User.save()
    .then(()=>res.send("Congragulations! Registration is successful. "))
    .catch(()=>res.send("Registration faild. Please try with a different email and mobile number"))
})


/* Login servie */
router.route("/login/:email/")
.post((req, res)=>{
    const {email} = req.params;
    const {password} = req.body;    
    Users.findOne({email})
    .then(user=>{
        bcrypt.hash(()=>{
        bcrypt.compare(password, user.password, (err, data)=>{        
           if(data){              
           res.send({email:user.email, userid:user._id, firstname:user.firstname, usertype:user.usertype});
           } else{
               res.send({error:'password or username not matched!'});
           }
       })
    }) 
})
  
    .catch(err=>res.send(err))
})


module.exports = router;
