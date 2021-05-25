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
                                <label>Email as username</label>
                                <input className="form-control" type="email"/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input className="form-control" type="password" />
                            </div>
                            <div className="form-group">
                                <label>First name</label>
                                <input className="form-control" type="text"/>
                            </div>
                            <div className="form-group">
                                <label>Last name</label>
                                <input className="form-control" type="text"/>
                            </div>
                            <div className="form-group">
                                <label>Mobile number</label>
                                <input className="form-control" type="text"/>
                            </div>
                            <div>
                                <button className="btn btn-success" type="submit">Signup</button>
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
