import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory, getOrders } from "../../API";
import Logo from './—Pngtree—add button vector_9082271.png'
import AppHeader from "../../Components/AppHeader";
import SideMenu from "../../Components/SideMenu";
function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [fname,setFname]=useState('')
  const [lname,setLname]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [popup,setPopup]=useState(false)
  const [popUpOpen,setPopupOpen]=useState(false)
  const [admin,setAdmin]=useState([])


 const handleOpen=()=>{
  setPopup(true);
 }
 const closeOpen=()=>{
  setPopup(false)
 }
const handlePopup=()=>{
  setPopupOpen(false)
}

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fname, lname, email, password);
    fetch("http://localhost:5000/adminRegister", {
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


useEffect(()=>{
  fetch('http://localhost:5000/getAdmin',{
    method:"GET",
    headers:{
      "Content-Type":'application/json'
    }
  })
  .then(response=>{
    if(!response.ok){
      throw new Error("Network Error")
    }
    return response.json();
  })
  .then(data=>{
    setAdmin(data.data)
  })
  .catch(error=>{
    console.error('error fetching Data',error)
  })
},[])


  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-rose-400 to-white'">
    <AppHeader/>
    <div  className="flex">
    
    <SideMenu/>
    <div>
    <div>
      <div  className="px-20 mt-[-30px]  text-ml shadow-black font-serif cursor-pointer">
      <img onClick={handleOpen} src={Logo} alt="Logo" className="w-16 pl-2" />
      <p>Add Admin</p></div>
      {popup && (
      <form onSubmit={handleSubmit}  className="fixed top-0 left-0 w-full h-full bg-gray-400 bg-opacity-60 flex justify-center items-center z-50">
       <div className="flex flex-col bg-white p-10 rounded-s-xl ">
        <div >
        <label>First Name</label>
        <input
        type='text'
        placeholder="enter the Name"
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        onChange={(e)=>setFname(e.target.value)}
        /></div>

        <div>
        <label>Last Name</label>
        <input
        type="text"
        onChange={(e)=>setLname(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        placeholder="enter the Last Name"/>
        </div>
        
        <div>
        <label>Email</label>
        <input
        type="email"
        placeholder="Enter the email"
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        onChange={(e)=>setEmail(e.target.value)}
        /></div>
        <div>
        <label>password</label>
        <input
        type="password"
        placeholder="Enter the Password"
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        onChange={(e)=>setPassword(e.target.value)}
        /></div>
        <button type="submit" className="bg-blue-500 py-2 rounded-2xl text-fuchsia-50 my-3">Submit</button>
        <button className="bg-red-500 py-2 rounded-2xl text-white" onClick={closeOpen}>Close</button>
        </div>
      </form>)}
    </div>
    <div size={20} direction="vertical">
      <h1 className="text-center text-3xl font-serif">Admin Details</h1>
      <table className="min-w-full mx-20 mt-4 divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 w-40 py-3 text-left text-xl font-semibold text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 w-40 py-3 text-left text-xl font-semibold text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 w-40 py-3 text-left text-xl font-semibold text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 w-40 py-3 text-left text-xl font-semibold text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
        {admin.map((adminUser,index)=>
            <tr key={index}>
             <td className="px-5 text-lg py-4  ">{adminUser.fname}</td>
             <td className="px-5 text-lg py-4  ">{adminUser.lname}</td>
             <td className="px-5 text-lg py-4  ">{adminUser.email}</td>
             <td className="flex"><button className="bg-red-600 px-3 py-2 mx-3 font-sans hover:bg-red-400 text-white rounded-xl">Delete</button>
             <button className="bg-blue-500 px-5 py-2 mx-3 font-sans hover:bg-blue-300 text-white rounded-xl">Edit</button>
             </td>
            </tr>
         )}
        </tbody>
        </table>
        <div>
    </div>



    </div>
    </div>
    </div>
    </div>
  );
}
export default Orders;
