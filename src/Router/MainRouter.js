import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../components/home/home';
import Register from '../components/Register/Register';
import ActualHome from '../components/actualHome/ActualHome';

const MainRouter = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} /> 
    <Route path="/register" element={<Register/>} />
    <Route path="/Home" element={<ActualHome/>} />
  </Routes>
  )
}

export default MainRouter