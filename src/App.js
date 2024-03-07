import { BrowserRouter, Routes, Route } from "react-router-dom";
import Singin from "./components/singin"
import Register from "./components/register"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Routes>
      <Route path="/" element={<Singin/>}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
