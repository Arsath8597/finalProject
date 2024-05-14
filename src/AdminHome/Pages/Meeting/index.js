import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory } from "../../API";
import AppRoutes from "../../Components/AppRoutes";
import AppHeader from "../../Components/AppHeader";
import AppFooter from "../../Components/AppFooter";
import SideMenu from "../../Components/SideMenu";
import Logo from './—Pngtree—add button vector_9082271.png'

function Inventory() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [dates, setDates] = useState([]);
  const [popup,setPopup]=useState(false)
  const [id,setId]=useState('');
const [password,setPassword]=useState('');
const [date,setDate]=useState('');
const [time,setTime]=useState('');
const [title,setTitle]=useState('');
const [popupOpen,setPopupOpen]=useState(false)
const [email, setEmail] = useState("");
const [room, setRoom] = useState("");
const [order ,setOrder]=useState("");

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  
  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetch('http://localhost:5000/api/dates', {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setDates(data);
      })
      .catch(error => {
        console.error('Error fetching dates:', error);
    
      });
  }, []); 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
  try {
    fetch("http://localhost:5000/api/dates", {
      method: "POST",
      crossDomain: true,
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        title,
          id,
          password,
          time,
          date,
      }),
  })
      .then((res) => res.json())
      .then((data) => {
          console.log(data, "userRegister");
         
              alert("Registration Successful");
          
      });
  } catch (error) {
    
    alert("server error");
  }}

  useEffect(()=>{
    fetch('http://localhost:5000/api/dates',{
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
      setOrder(data.data.length)
    })
    .catch(error=>{
      console.error('error fetching Data',error)
    })
  },[])
  

  const handleOpenPopup=()=>{
    setPopupOpen(true);
  }
  
  const handleClosePopup=()=>{
    setPopupOpen(false)
  }
  
  const handlePopup=()=>{
    setPopup(true);
  }
  
  const handleClosPopup=()=>{
    setPopup(false)
  }
  const handleClick = () => {
   
    setPopupOpen(false);
  };
  return (
    
    <div className="bg-gradient-to-br from-rose-400 to-white'">
      <AppHeader/>
      <div  className="flex">
      
      <SideMenu/>
    <Space size={20} direction="vertical">
    <div  className="px-20 mt-[-30px]  text-ml shadow-black font-serif cursor-pointer">
      <img onClick={handleOpenPopup} src={Logo} alt="Logo" className="w-16 pl-2" />
      <p>Add Shedule</p></div>
      
    {popupOpen  && (
  
  <form onSubmit={handleSubmit}  className="fixed top-0 left-0 w-full h-full bg-gray-400 bg-opacity-60 flex justify-center items-center z-50">
  <div className="bg-gray-300 p-8  shadow-xl w-96  rounded-2xl">
  <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-2">Title</label>
      <input
        type="text"
        placeholder='Type the title'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-2">Room ID</label>
      <input
        onChange={(e) => setId(e.target.value)}
        placeholder="Type Your Room ID"
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-2">Room Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Type Your Room Password"
        type="password"
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-2">Select Date</label>
      <input
        onChange={(e) => setDate(e.target.value)}
        placeholder="Date"
        type="date"
        value={date}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-2">Select Time</label>
      <input
        type="time"
        onChange={(e) => setTime(e.target.value)}
        value={time}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      />
    </div>

    <div className="flex justify-end">
      <button onClick={handleClosePopup} className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none">
        Cancel
      </button>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
        Submit
      </button>
    </div>
  </div>
</form>
)}
      <div className="text-center font-serif text-3xl">Meeting Schedule</div>
      <table className="min-w-full divide-y divide-gray-200 mx-10 rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 w-40 py-3 text-left text-xl font-semibold text-gray-500 uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 w-40 text-left text-xl font-semibold text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 w-52 text-left text-xl font-semibold text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 w-52 text-left text-xl font-semibold text-gray-500 uppercase tracking-wider">password</th>
            <th className="px-6 py-3 w-52 text-left text-xl font-semibold text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
        {dates.map((adminUser,index)=>
            <tr key={index}>
             <td className="px-5 text-lg py-4  ">{adminUser.title}</td>
             <td className="px-5 text-lg py-4  ">{new Date(adminUser.date).toLocaleDateString()},  {adminUser.time}</td>
             <td className="px-5 text-lg py-4  ">{adminUser.id}</td>
             <td className="px-5 text-lg py-4  ">{adminUser.password}</td>
             <td className=""><button className="bg-red-600 px-3 py-2 mx-3 font-sans hover:bg-red-400 text-white rounded-xl">Delete</button>
             <button className="bg-blue-500 px-5 py-2 mx-3 font-sans hover:bg-blue-300 text-white rounded-xl">Edit</button>
             </td>
            </tr>
         )}
        </tbody>
        </table>
    </Space></div></div>
  );
}
export default Inventory;
