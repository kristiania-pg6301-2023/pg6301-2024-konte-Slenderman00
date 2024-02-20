import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import { Logout } from "./pages/logout";
import Articles from "./pages/articles";
import Editor from "./pages/editor";
import Article from "./pages/article";
import Profile from "./pages/profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/news" element={<Articles/>}/>
          <Route path="/editor/:id" element={<Editor/>}/>
          <Route path="/article/:id" element={<Article/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
      <div className="footer">

      </div>
    </>
  )
}

export default App
