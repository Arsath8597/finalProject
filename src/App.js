import {  Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login"
import Singup from "./components/singup"
import UserLogin from "./components/userlogin"
import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";

function App() {
  return (
  
    <div className="App">
     <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/sinup" element={<Singup/>}/>
      <Route path="/userlogin" element={<UserLogin/>}/>
   <Route path="/Meeting" element={<LobbyScreen />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
      
     </Routes>
    </div>
   
  );
}

export default App;
