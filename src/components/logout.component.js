import React from 'react';


export default function Logout(){
    const localFirstName = localStorage.getItem("localFirstName");
    function onSubmitLogout(e){
        e.preventDefault();
        localStorage.clear();
        window.location.assign("/login/");
    }

    function renderLogout(){
        if(!localStorage.getItem("localUser") && !localStorage.getItem("localUserId")){
            window.location.assign("/login")
        } else{
            return(
                <div>
                    <p> Hi {localFirstName}!<br/> 
                    Are you sure to logout?</p>
                    <form onSubmit={onSubmitLogout}>
                        <button type="submit">Yes, Logout</button>
                    </form>
                </div>
            )

        }
    }



    return(
        <div>
            {renderLogout()}
        </div>
    )
}