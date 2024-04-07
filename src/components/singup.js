import React, { useState } from 'react';
import Navbar from "../pages/Navbar";
export default function Signup() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fname, lname, email, password);
        fetch("http://localhost:5000/register", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                fname,
                email,
                lname,
                password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegister");
                if (data.status === "ok") {
                    alert("Registration Successful");
                } else {
                    alert("Something went wrong");
                }
            });
    };

    return (
        <div className="flex bg-gradient-to-br from-rose-400 to-white flex-col justify-center items-center h-screen w-screen">
                   <Navbar/>
                          <div className="mt-24 bg-white bg-opacity-20  w-[500px] h-[500px] rounded-xl">
                <h1  className="flex  justify-center mb-10 font-bold text-3xl">SING UP</h1>
                <form onSubmit={handleSubmit}>
                    <div className="my-8 flex justify-center">
                       
                        <input
                            className="text-xl py-2 w-[80%] bg-blue-200 font-semibold rounded-xl"
                            type="text"
                            name='fname'
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                            placeholder="First name"
                        />
                    </div>
                    <div className="my-8 flex justify-center">
                        
                        <input
                            className="text-xl py-2 w-[80%] bg-blue-200 font-semibold rounded-xl"
                            type="text"
                            name='lname'
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}
                            placeholder="Last name"
                        />
                    </div>
                    <div className="my-8 justify-center flex">
                       
                        <input
                          className="text-xl py-2 w-[80%] bg-blue-200 font-semibold rounded-xl"
                            type="email"
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email"
                        />
                    </div>
                    <div className="my-8 justify-center flex">

                        <input
                           className="text-xl py-2 w-[80%] bg-blue-200 font-semibold rounded-xl"
                            type="password"
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password"
                        />
                    </div>
                    <div className="text-2xl justify-center flex">
                        <button type="submit" className="bg-black text-white w-[50%] rounded-xl p-2">Submit</button>
                    </div>
                </form>
                <p className="flex font-semibold text-lg justify-end mr-10 text-blue mt-2">
                    Already registered? &nbsp;&nbsp;<a href="/login" className=" text-blue-600">Sign In</a>
                </p>
            </div>
        </div>
    );
}
