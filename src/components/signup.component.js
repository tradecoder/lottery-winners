import React from 'react';


export default function Signup(){


    function onSubmitSignup(e){
        e.preventDefault();
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
                                <input className="form-control" type="email" required/>
                            </div>
                            <div className="form-group">
                                <label>Password </label>
                                <input className="form-control" type="password" required/>
                            </div>
                            <div className="form-group">
                                <label>First name</label>
                                <input className="form-control" type="text" required/>
                            </div>
                            <div className="form-group">
                                <label>Last name </label>
                                <input className="form-control" type="text" required/>
                            </div>
                            <div className="form-group">
                                <label>Mobile number </label>
                                <input className="form-control" type="text" required/>
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
