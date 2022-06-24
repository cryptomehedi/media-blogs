import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Common-Items/Nav";
import Login from "./Components/Login-Reg/Login";
import Register from "./Components/Login-Reg/Register";

 
function App() {
  return (
    <div>
      <Nav/> 
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
