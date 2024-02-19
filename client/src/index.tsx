import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'

import Home from "./pages/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/login" element={<div>test</div>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
