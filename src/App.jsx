 
import { BrowserRouter,Route,Routes } from "react-router-dom"
import './index.css'; 
import { NotFound } from "./pages/NotFound"
import { Home } from "./pages/Home"
import { Toaster } from "@/components/ui/toaster";

import React from "react";

 
function App() {
  
  return (
    <>
    <Toaster/>
      <BrowserRouter>
      <Routes>
 <Route index element={<Home/>}/>

  <Route path ="*" element={<NotFound/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
