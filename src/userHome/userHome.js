import React,{useEffect} from 'react'

import Create from '../image/dashboard1.png'
import Mymeeting from '../image/dashboard2.png'

import Service from './Service'
import Navbar from './Navbar'
import Home from './Home'
import Meeting from './Meeting'
import Contact from './Contact'
import Footer from './Footer'
import About from './About'


export const Userlogin = () => {
    useEffect(() => {
    fetch("http://localhost:5000/userData", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          token: window.localStorage.getItem("token"),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userData");
         
        });
    }, []);
    const logOut = () => {
        window.localStorage.clear();
        window.location.href = "./login";
      };

   
  return (
    <div className='overflow-x-hidden'>
        <Navbar/>
        <Home/>
        <About/>
        <Meeting/>
        <Service/>
        <Contact/>
        <Footer/>
    </div>
  )
}
export default Userlogin
