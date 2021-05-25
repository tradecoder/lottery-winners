import React from 'react';


export default function Signup(){


    function onSubmitSignup(e){
        e.preventDefault();
    }

    function renderSignup(){
        if(!localStorage.getItem("localUser") && !localStorage.getItem("localUserId")){
            return(
                <div>
                    <p>Please sign up</p>
                    <div>
                        <form onSubmit={onSubmitSignup}>
                            <div className="form-group">
                                <label>Email as username</label>
                                <input type="email"/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" />
                            </div>
                            <div className="form-group">
                                <label>First name</label>
                                <input type="text"/>
                            </div>
                            <div className="form-group">
                                <label>Last name</label>
                                <input type="text"/>
                            </div>
                            <div className="form-group">
                                <label>Mobile number</label>
                                <input type="text"/>
                            </div>
                            <div>
                                <button className="btn btn-primary" type="submit">Submit</button>
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
