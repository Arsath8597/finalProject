import React from "react";

export default function Singin(){
    return(
        <div>
            <h1>Sing In</h1>
            <div>
                <label>Email Address</label>
                <input type="email" placeholder="Enter Email"/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" placeholder="Enter Password"/>
            </div>
        </div>
    )
}
