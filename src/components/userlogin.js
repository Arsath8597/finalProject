import React,{useEffect} from 'react'


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
    <div>
        <div className='flex bg-slate-300 justify-between p-4'>
            <h2 className=' font-semibold text-2xl'>Vistual Event Platform</h2>
            <h2 className=' font-semibold text-2xl'>Hi iam Arsath</h2>
            <button className='bg-black font-semibold text-white p-3 rounded-2xl'  onClick={logOut}>Log Out</button>
        </div>
        <div className='flex justify-center items-center'>
            <button className=' bg-red-100'><a href='./Meeting'>Create instant meating</a> </button>
        </div>
    </div>
  )
}
export default Userlogin
