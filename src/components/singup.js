import React, { useState } from 'react';

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
        <div className="flex flex-col justify-center items-center h-screen w-screen">
            <div className="bg-gray-200 w-[500px] h-[400px] rounded-xl">
                <h1 className="flex justify-center mb-10 font-semibold text-2xl">Sign up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="my-10">
                        <label className="m-5 text-xl">First Name</label>
                        <input
                            className="text-xl"
                            type="text"
                            name='fname'
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                            placeholder="First name"
                        />
                    </div>
                    <div className="my-10">
                        <label className="m-5 text-xl">Last Name</label>
                        <input
                            className="text-xl"
                            type="text"
                            name='lname'
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}
                            placeholder="Last name"
                        />
                    </div>
                    <div className="my-10">
                        <label className="m-5 text-xl">Email</label>
                        <input
                            className="text-xl"
                            type="email"
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email"
                        />
                    </div>
                    <div className="my-10">
                        <label className="m-5 text-xl">Password</label>
                        <input
                            className="text-xl"
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
                <p className="flex justify-end mr-32 text-blue mt-10">
                    Already registered? <a href="/login" className="text-blue">Sign In</a>
                </p>
            </div>
        </div>
    );
}
