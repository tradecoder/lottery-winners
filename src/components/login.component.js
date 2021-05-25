import React, {useState} from 'react';
import axios from 'axios';


export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [localUser, setLocalUser] = useState("");
    const [localUserId, setLocalUserid] =  useState("");
    const [localFirstName, setLocalFirstName] =  useState("");
    function onChangeEmail(e){
        setEmail(e.target.value)
    }
    function onChangePassword(e){
        setPassword(e.target.value)
    }
    function onSubmitLogin(e){
        e.preventDefault();
        
        axios.post(`http://localhost:5000/api/users/login/${email}/`, {password})
        .then(res=>{
            console.log(res);       
            setLocalUser(res.data.email);
            setLocalUserid(res.data.userid);
            setLocalFirstName(res.data.firstname);
            // window.location.assign("/");
            
        })
        .catch(err=>window.alert(err))
    }

    if(!localStorage.getItem("localUser")){
        localStorage.setItem("localUser", localUser)
    }
    if(!localStorage.getItem("localUserId")){
        localStorage.setItem("localUserId", localUserId)
    }
    if(!localStorage.getItem("localFirstName")){
        localStorage.setItem("localFirstName", localFirstName)
    }

    function renderLogin(){
        if(!localStorage.getItem("localUser") && !localStorage.getItem("localUserId")){
            return(
                <div className="login">
                    <p>Please Login to Continue</p>
                    <form onSubmit={onSubmitLogin}>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" placeholder="Email address" onChange={onChangeEmail} className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" placeholder="Password" onChange={onChangePassword} className="form-control" required />
                        </div>
                        <div>                      
                            <button className="btn btn-primary btn-block" type="submit">Login</button>
                            <p className="text-right">Haven't an account? <a target="_self" href="/signup">Signup here</a></p>
                        </div>
                    </form>
                </div>
            )

        } else {
         
            return(
                
                <div className="login">
                <p className="text-success">Hi {localStorage.getItem('localFirstName')} ! </p>
                <h4 className="text-success">You are welcome! </h4>
                <p className="text-secondary">Please select an item from the menu to continue.</p>
        </div>
            )
        }
    }



    return(
        <div className="container">
            {renderLogin()}
        </div>
    )
}