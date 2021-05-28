import React from 'react';


export default function Home(){

    const localUser = localStorage.getItem('localUser');
    const localUserId = localStorage.getItem('localUserId');


    function renderHome(){
        if(localUser && localUserId){
            return(
                <div>
                    <a href="/new-ticket">Collect a new Ticket</a>
                </div>
            )

        }else{
            return (
                <div>
                    <p>Please login to continue</p>
                </div>
            )
        }
    }
    return(
        <div>
            {renderHome()}

        </div>
    )
}