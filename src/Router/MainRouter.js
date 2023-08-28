import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../components/home/home';
import Register from '../components/Register/Register';

const MainRouter = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} /> 
    <Route path="/register" element={<Register/>} />
  </Routes>
  )
}

export default MainRouter