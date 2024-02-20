import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import { Logout } from "./pages/logout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/logout" element={<Logout/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
