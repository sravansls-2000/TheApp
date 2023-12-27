import React from 'react'
import { useLocation, useNavigate } from 'react-router'

const Login = (props) => {
const navigate =useNavigate();
const createAccountNavigate=()=>{
  props.clicked("Sign")
}
  
  return (
    <div className='pr-11'>
    <form className='mt-11 mb-11 grid grid-rows-5 gap-1 w-full h-[400px] rounded-md shadow-lg bg-[#ffffff] shadow-cyan-500/50' >
     <h1 className='flex text-[#264E86] mt-6 text-3xl font-bold justify-center'>Login</h1>
      <input name="userName" className='h-11 border-2 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 focus:border-opacity-50 border-[#264E86] mb-2 ml-12 mr-12 rounded-md box-border ' placeholder="UserName or Email id"/>
      <input  name="passWord" className='h-11  border-2 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 focus:border-opacity-50 border-[#264E86]   ml-12 mr-12 rounded-md box-border' placeholder="Password"/>
      <button  className='h-11 mb-2 ml-12 mr-12 rounded-md box-border text-[white]  bg-[#264E86] shadow-lg shadow-[#264E86]' type='submit'>Login</button>
      <a className=' text-[black] flex justify-center' onClick={createAccountNavigate}>Creat a new account</a>
  </form>

    </div>

  )
}

export default Login