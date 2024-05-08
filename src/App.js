import {  Routes, Route } from "react-router-dom";

import Login from "./components/login"
import Singup from "./components/singup"
import UserHome from "./userHome/userHome"
import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";
import AdminLogin from './components/adminLogin'
import AdminHome  from "./components/AdminHome";
import Sample from './components/sample'
import Landing from "./container/Landing";
import Calender from './components/Calender'
import UserDetails from "./components/userdetails";
import User from './sample/user'
import CreateMeeting from "./userHome/Pages/createMeeting";
import UpcomingMeeting from "./screens/upcomingMeeting";
import Meeting from './userHome/Pages/meeting'
function App() {
  return (
  
    <div className="App">
     <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/adminlogin" element={<AdminLogin/>}/>
      <Route path="/adminhome" element={<AdminHome/>}/>
      <Route path="/sinup" element={<Singup/>}/>
      <Route path="/userhome" element={<UserHome/>}/>
   <Route path="/Meeting" element={<LobbyScreen />} />
   <Route path="/calender" element={<Calender />} />
   <Route path="/sample" element={<Sample />} />
   <Route path="/userdetails" element={<UserDetails />} />
        <Route path="/room/:roomId" element={<RoomPage />} />    
        <Route path="/user" element={<User />} />    
        <Route path="/createMeeting" element={<CreateMeeting />} /> 
        <Route path="/upcomingMeeting" element={<UpcomingMeeting />} /> 
        <Route path="/meet" element={<Meeting />} />

     </Routes>
    </div>
   
  );
}

export default App;
