import React, { useState ,useCallback, useEffect} from 'react'
import NewMeeting from '../assets/add-meeting.svg'
import JoinMeeting from '../join-meeting.svg'
import Shedule from '../schedule.svg'
import { useNavigate } from "react-router-dom";
import { useSocket } from "../../context/SocketProvider";
export const CreateMeeting = () => {

const [id,setId]=useState('');
const [password,setPassword]=useState('');
const [date,setDate]=useState('');
const [time,setTime]=useState('');
const [title,setTitle]=useState('');
const [popupOpen,setPopupOpen]=useState(false)
const [email, setEmail] = useState("");
const [room, setRoom] = useState("");
const socket = useSocket();
const navigate = useNavigate();
const [popup,setPopup]=useState(false)

const handleSubmitForm = useCallback(
  (e) => {
    e.preventDefault();
    socket.emit("room:join", { email, room });
  },
  [email, room, socket]
);

const handleJoinRoom = useCallback(
  (data) => {
    const { email, room } = data;
    navigate(`/room/${room}`);
  },
  [navigate]
);

useEffect(() => {
  socket.on("room:join", handleJoinRoom);
  return () => {
    socket.off("room:join", handleJoinRoom);
  };
}, [socket, handleJoinRoom]);

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
}
};

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
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-center text-3xl mb-8 font-bold'>Schedule Meeting</h1>
        <div className='flex '>
          <a href='/Meeting'>
          <div className=' bg-blue-400 cursor-pointer text-white text-center w-[220px] h-[170px] rounded-2xl ml-10 p-2'>
          <img alt='new Meeting' className='bg-slate-500 p-1 rounded-xl mb-8' src={NewMeeting}/>
            <h1 className='font-semibold text-xl  mb-1'>New Meeting</h1>
            <p>Start and instant Meeting</p>
            
          </div></a>
          <div onClick={handlePopup} className=' bg-blue-400 cursor-pointer text-white text-center w-[220px] h-[170px] rounded-2xl ml-10 p-2'>
          <img alt='joinMeeting' className='bg-slate-500 p-1 rounded-xl mb-8' src={JoinMeeting}/>
            <h1 className='font-semibold text-xl  mb-1'>Join Meeting</h1>
            <p>Via inviation link</p>
            
          </div>
          <div onClick={handleOpenPopup} className=' bg-blue-400 cursor-pointer text-white text-center w-[220px] h-[170px] rounded-2xl ml-10 p-2'>
          <img alt='shedule' className='bg-slate-500 p-1 rounded-xl mb-8' src={Shedule}/>
            <h1 className='font-semibold text-xl  mb-1'>Schedule Meeting</h1>
            <p>Plan Your Meeting Schedule</p>
          </div><a href='upcomingMeeting'>
          <div onClick={handleOpenPopup} className=' bg-blue-400 cursor-pointer text-white text-center w-[220px] h-[170px] rounded-2xl ml-10 p-2'>
          <img alt='Times' className='bg-slate-500 p-1 rounded-xl mb-8' src={NewMeeting}/>
            <h1 className='font-semibold text-xl  mb-1'>Upcoming Meeting</h1>
            <p>Start and instant Meeting</p>
          </div></a>
        </div>
{popupOpen  && (
  
  <form onSubmit={handleSubmit} className="fixed top-0 left-0 w-full h-full bg-gray-400 bg-opacity-60 flex justify-center items-center z-50">
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
{popup &&(
  <div className='fixed top-0 left-0 w-full h-full bg-gray-400 bg-opacity-55 z-50 justify-center items-center flex'>
<div className="flex justify-center items-center w-[500px] h-[400px] z-50  bg-gray-300 rounded-xl shadow-2xl ">
      
      <div className=''>
      <h1 className="font-bold text-center mb-10 text-4xl ">Join Meeting</h1>
      <form onSubmit={handleSubmitForm}>
      <label className="font-semibold text-xl my-10" htmlFor="text">Room ID</label>
        
        <input
          type="text"
          className='h-10 my-3 w-full '
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
       
        <label className="font-semibold text-xl " htmlFor="room">Room Password</label>
        <input
          type="text"
          id="room"
          className='h-10 w-full my-3 mb-10'
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <br />
        <button className='bg-slate-500 px-8  py-2 mr-4 rounded-xl' onClick={handleClosPopup}>Close</button>
        <button className="py-2 rounded-xl font-semibold px-8 bg-blue-600">Join</button>
      </form>
      </div>
    </div></div>)}
    </div>
  )
}

export default CreateMeeting;