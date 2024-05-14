import React, { useEffect, useCallback, useState } from "react";
import ReactPlayer from "react-player";
import peer from "../service/peer";
import { useSocket } from "../context/SocketProvider";
import Navbar from "../userHome/Navbar";
import { FaVideo } from 'react-icons/fa';
import { FaMicrophone } from 'react-icons/fa';

const RoomPage = () => {
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState();
  const [remoteStream, setRemoteStream] = useState();


  const handleUserJoined = useCallback(({ email, id }) => {
    console.log(`Email ${email} joined room`);
    setRemoteSocketId(id);
  }, []);

  const handleCallUser = useCallback(async () => {  
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    const offer = await peer.getOffer();
    socket.emit("user:call", { to: remoteSocketId, offer });
    setMyStream(stream);
  }, [remoteSocketId, socket]);

  const handleIncommingCall = useCallback(
    async ({ from, offer }) => {
      setRemoteSocketId(from);
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setMyStream(stream);
      console.log(`Incoming Call`, from, offer);
      const ans = await peer.getAnswer(offer);
      socket.emit("call:accepted", { to: from, ans });
    },
    [socket]
  );
  


  const sendStreams = useCallback(() => {
    for (const track of myStream.getTracks()) {
      peer.peer.addTrack(track, myStream);
    }
  }, [myStream]);

  const handleCallAccepted = useCallback(
    ({ from, ans }) => {
      peer.setLocalDescription(ans);
      console.log("Call Accepted!");
      sendStreams();
    },
    [sendStreams]
  );

  const handleNegoNeeded = useCallback(async () => {
    const offer = await peer.getOffer();
    socket.emit("peer:nego:needed", { offer, to: remoteSocketId });
  }, [remoteSocketId, socket]);

  useEffect(() => {
    peer.peer.addEventListener("negotiationneeded", handleNegoNeeded);
    return () => {
      peer.peer.removeEventListener("negotiationneeded", handleNegoNeeded);
    };
  }, [handleNegoNeeded]);

  const handleNegoNeedIncomming = useCallback(
    async ({ from, offer }) => {
      const ans = await peer.getAnswer(offer);
      socket.emit("peer:nego:done", { to: from, ans });
    },
    [socket]
  );

  const handleNegoNeedFinal = useCallback(async ({ ans }) => {
    await peer.setLocalDescription(ans);
  }, []);

  useEffect(() => {
    peer.peer.addEventListener("track", async (ev) => {
      const remoteStream = ev.streams;
      console.log("GOT TRACKS!!");
      setRemoteStream(remoteStream[0]);
    });
  }, []);

  useEffect(() => {
    socket.on("user:joined", handleUserJoined);
    socket.on("incomming:call", handleIncommingCall);
    socket.on("call:accepted", handleCallAccepted);
    socket.on("peer:nego:needed", handleNegoNeedIncomming);
    socket.on("peer:nego:final", handleNegoNeedFinal);

    return () => {
      socket.off("user:joined", handleUserJoined);
      socket.off("incomming:call", handleIncommingCall);
      socket.off("call:accepted", handleCallAccepted);
      socket.off("peer:nego:needed", handleNegoNeedIncomming);
      socket.off("peer:nego:final", handleNegoNeedFinal);
    };
  }, [
    socket,
    handleUserJoined,
    handleIncommingCall,
    handleCallAccepted,
    handleNegoNeedIncomming,
    handleNegoNeedFinal,
  ]);
  

  // Function to handle the "call cut" action
  const handleCallCut = () => {
    // Implement logic to disconnect the call
    // For example:
    setMyStream(null)
    setRemoteStream(null)
    setRemoteSocketId(null)
  };

  const Vedio = () => {
    // Implement logic to disconnect the call
    // For example:
    setMyStream(null)
   
  };


  return (
    <div  className=" bg-gradient-to-br h-[100vh] overflow-hidden  from-rose-400 to-white w-[100vw]">
<Navbar/>
<h1 className="none">.</h1>
<div className="mt-20 font-serif flex flex-col text-center items-center  justify-center ">
      <h1 className="text-3xl font-semibold">Vitual Room</h1>
      <h4>{remoteSocketId ? "Connected" : "No one in room"}</h4>
      </div >
      <div className="flex flex-col ml-20 text-xl"><div>
      {myStream && <button className="" onClick={sendStreams}>Send our Stream</button>}</div>
      {remoteSocketId && (
      <div>  
  <button className=" bg-green-600
   text-white text-xl w-30 py-3 px-6  rounded-2xl ml-3" onClick={handleCallUser}>
    Connect
  </button></div>
  
)}</div>
      <div className="flex  justify-center mt-[-140px] items-center">
      {myStream && (
        
        <div className="absolute flex justify-start border-white border-12 z-50">
       
          <ReactPlayer
            playing
            muted
            height="100px"
            width="200px"
            style={{ border: '2px solid white', marginRight:"400px" ,marginTop:"-50px",marginBottom:"350px"}}
            url={myStream}
          />
        </div>
      )}
      {remoteStream && (
        <div className="relative flex-none">
          {/* <h1>Remote Stream</h1> */}
          <ReactPlayer
          
            playing
            muted
            height="500px"
            style={{ border: '2px solid white'}}
            width="700px"
            url={remoteStream}
          />
          <div className="z-50 mt-[-50px] flex justify-center  w-full  absolute">
            <button onClick={handleCallCut} className="bg-red-600 text-white px-5 py-2 rounded-xl">End</button>
            <button onClick={Vedio} className="bg-red-600 mx-10 text-white px-5 py-2 rounded-xl"> <FaVideo /></button>
            <button  className="bg-red-600 mx-10 text-white px-5 py-2 rounded-xl"> <FaMicrophone/></button>
        \
          </div>
        </div>
      )}</div>
    </div>
  );
};

export default RoomPage;
