import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Common-Items/Nav";
import RequireAuth from "./Components/Common-Items/RequireAuth";
import Home from "./Components/Home/Home";
import Login from "./Components/Login-Reg/Login";
import Register from "./Components/Login-Reg/Register";

 
function App() {
  return (
    <div>
      <Nav/> 
      <Routes>
        <Route path="/" element={<RequireAuth><Home/></RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
