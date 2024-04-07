import React, { useState } from "react";

export default function Login(){
 const [email,setEmail]=useState('')
 const [password,setPassword]=useState('')

 function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("http://localhost:5000/adminlogin", {
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

          window.location.href = "./adminhome";
        }
      });
  }
    return(
        <div className="flex flex-col bg-gradient-to-r from-blue-500 to-green-500 justify-center items-center h-[100vh] w-[100vw]"> 
          <form onSubmit={handleSubmit}>
              <div className=" bg-white bg-opacity-20 w-[500px] h-[400px] rounded-xl">
            <h1 className="flex  justify-center mb-10 font-bold text-3xl">SING IN</h1>
            <div className="my-10 flex items-center justify-center">
    
                <input onChange={(e)=>{setEmail(e.target.value)}}  className="text-lg py-2 w-[80%] bg-blue-200  rounded-xl"  type="email" placeholder="  Enter Email"/>
            </div>
            <div className="my-10 items-center justify-center flex">
              
                <input onChange={(e)=>{setPassword(e.target.value)}} className="text-lg py-2 w-[80%] bg-blue-200  rounded-xl" type="password" placeholder="  Enter Password"/>
            </div>
            <div>
            <input
        type="checkbox"
        id="rememberMe"
        className="form-checkbox h-4 w-5 mt-1 ml-16 mb-4 text-blue-500"
      />
      <label htmlFor="rememberMe" className="ml-2 mt[-2px] text-gray-700">
        Remember Me
      </label></div>
            <div className="text-2xl justify-center flex">
                <button  type="submit" className=" bg-black text-white w-[50%] rounded-xl p-2" >Submit</button>
            </div>
          
            
              <p className="font-lg mt-10 w-[50%] h-10 ml-5 flex ">
                <a href="/login" className=" text-blue-600 font-semibold text-2xl">As User</a>
            </p>
            </div></form>
        </div>
    )
}
