
import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../../context/SocketProvider";
import Navbar from "../Navbar";


const LobbyScreen = () => {


  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const socket = useSocket();
  const navigate = useNavigate();

  useEffect(() => {
    // Get the meeting ID and password from the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const idFromUrl = urlParams.get('id');
    const passwordFromUrl = urlParams.get('password');
    
    // Set the meeting ID and password in the component state
    if (idFromUrl) {
      setEmail(idFromUrl);
    }
    if (passwordFromUrl) {
      setRoom(passwordFromUrl);
    }
  }, []); 

 
  const handleSubmitForm = useCallback(
    (e) => {
      alert(`Joining meeting with ID: ${email} and password: ${room}`);
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

  return (
    <div className=" bg-gradient-to-br from-rose-400 to-white w-[100vw] h-[100vh]">
      <Navbar/>
    <div className="flex justify-center items-center">
      
      <div>
      <h1 className="font-bold mt-32 text-4xl my-5">Create Vitual Room</h1>
      <form onSubmit={handleSubmitForm}>
 
        <label className="font-semibold text-xl my-10" htmlFor="email">Room Email</label>
        <input
   className="w-full py-2 px-4 rounded-lg shadow-xl"
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
       
        <label className="font-semibold text-xl " htmlFor="room">Room Password</label>
        <input
          type="text"
          id="room"
          className="w-full py-2 px-4 rounded-lg shadow-xl"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          required
        />
        <br />
        <button className="py-2 rounded-xl mt-5 font-semibold px-8 bg-blue-600">Join</button>
      </form>
      </div>
    </div></div>
  );
};

export default LobbyScreen;
