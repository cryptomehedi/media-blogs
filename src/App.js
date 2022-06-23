import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Common-Items/Nav";
import Login from "./Components/Login-Reg/Login";

 
function App() {
  return (
    <div>
      <Nav/> 
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
