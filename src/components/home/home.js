import React, { useEffect, useState } from 'react'
import Login from '../Login/Login'
import Footer from './footer'
import { useDispatch, useSelector } from 'react-redux'
import { qouteAction } from '../../redux/slices/quoteSlice'
import { useLocation } from 'react-router'
import Register from '../Register/Register'


const Home = () => {
const dispatch =useDispatch()
const qoute =useSelector(state=>state.Qoute.qoutes[0]);
const [openRegister,setOpenRegister]=useState(false);


const handleRegister=(some)=>{
  console.log(some)
  if(some="SignUp"){
    setOpenRegister(true)
  }else{setOpenRegister(false)}

}
useEffect(() => {
  dispatch(qouteAction());
}, [dispatch]);

  return (
    <div>
    
    <div className={`grid ${openRegister?"grid-cols-2":"grid-cols-3"} gap-4 auto-cols-auto`}>
    <div className='com-logo  '>
   
    </div>{openRegister?null:
    <div className='max-w-full max-h-full  mt-[120px]'>
      <h1 className='text-3xl text-[#264E86] qoute'>{qoute?.content}</h1>
      <p className='qoute text-[#264E86]'>-{qoute?.author}</p>
    </div>}
    <div className='max-w-full max-h-full'>{openRegister?<Register clicked={handleRegister}/>:<Login clicked={handleRegister}/>}</div>
    </div>
    <Footer/>
    </div>
  )
}

export default Home