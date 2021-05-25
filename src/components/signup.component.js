import React, {useState} from 'react';
import axios from 'axios';


export default function Signup(){
    const [userData, setUserData] =  useState({
        email:"",
        password:"",
        firstname:"",
        lastname:"",
        mobile:0,
        facebookprofile:"",
        usertype:"admin"
    });

    function onChangeUserData(e){
        setUserData({...userData, [e.target.name]:e.target.value})
    }


    function onSubmitSignup(e){
        e.preventDefault();
        axios.post(`http://localhost:5000/api/users/register/`, userData)
        .then(res=>{
            setUserData({
                email:"",
                password:"",
                firstname:"",
                lastname:"",
                mobile:0,
                facebookprofile:"",
            })
            document.querySelector("form").reset();
            window.alert(res.data);
            
        })
        .catch(err=>window.alert(err));

        
    }
        

    function renderSignup(){
        if(!localStorage.getItem("localUser") && !localStorage.getItem("localUserId")){
            return(
                <div className="signup">
                    <p>Please sign up</p>
                    
                    <div>
                        <form onSubmit={onSubmitSignup}>
                            <div className="form-group">
                                <label>Email as username </label>
                                <input name="email" className="form-control" type="email" onChange={onChangeUserData} required/>
                            </div>
                            <div className="form-group">
                                <label>Password </label>
                                <input name="password" className="form-control" type="password" onChange={onChangeUserData} required/>
                            </div>
                            <div className="form-group">
                                <label>First name</label>
                                <input name="firstname" className="form-control" type="text" onChange={onChangeUserData} required/>
                            </div>
                            <div className="form-group">
                                <label>Last name </label>
                                <input name="lastname" className="form-control" type="text" onChange={onChangeUserData} required/>
                            </div>
                            <div className="form-group">
                                <label>Mobile number </label>
                                <input name="mobile" className="form-control" type="text" onChange={onChangeUserData} required/>
                            </div>
                            <div className="form-group">
                                <label>Facebook profile url </label>
                                <input name="facebookprofile" className="form-control" type="url" onChange={onChangeUserData} required/>
                            </div>
                            <div>                                
                                <button className="btn btn-success btn-block" type="submit">Signup</button>
                                <p className="text-right pt-1">Have an account? <a target="_self" href="/login">Login here</a></p>
                            </div>
                        </form>
                    </div>
                </div>
                
            )
            

        }else{
            window.alert("You are already logged in");
            window.location.assign("/");

         }
    }
    return(
        <div className="container">
            {renderSignup()}        
        </div>
    )
}
