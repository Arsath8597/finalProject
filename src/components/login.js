import React, { useState } from "react";

export default function Login(){
 const [email,setEmail]=useState('')
 const [password,setPassword]=useState('')

 function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("http://localhost:5000/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./userlogin";
        }
      });
  }
    return(
        <div className="flex flex-col justify-center items-center h-[100vh] w-[100vw]"> 
            <form onSubmit={handleSubmit}><div className=" bg-gray-200 w-[500px] h-[400px] rounded-xl">
            <h1 className="flex  justify-center mb-10 font-semibold text-2xl">Sing In</h1>
            <div className="my-10">
                <label className=" m-5 text-xl">Email Address</label>
                <input onChange={(e)=>{setEmail(e.target.value)}} className="text-xl" type="email" placeholder="Enter Email"/>
            </div>
            <div className="my-10">
                <label className="m-10 text-xl">Password</label>
                <input onChange={(e)=>{setPassword(e.target.value)}} className="text-xl" type="password" placeholder="Enter Password"/>
            </div>
            <div className="text-2xl justify-center flex">
                <button  type="submit" className=" bg-black text-white w-[50%] rounded-xl p-2" >Submit</button>
            </div>
            <p className="flex justify-end mr-32 text-blue mt-10">
                <a href="/sinup" className=" text-blue">Log in</a>
            </p>
            </div></form>
        </div>
    )
}
