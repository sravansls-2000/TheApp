import React from 'react'

const Login = () => {
  return (
    <div className='pr-11'>
    <form className='mt-11 mb-11 grid grid-rows-4 gap-1 w-full h-[400px] rounded-md shadow-lg bg-white shadow-cyan-500/50' >
      <input name="userName" className='h-11 border-2 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 focus:border-opacity-50 border-[#5E88FC] mt-12 mb-2 ml-12 mr-12 rounded-md box-border ' placeholder="UserName or Email id"/>
      <input  name="passWord" className='h-11  border-2 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 focus:border-opacity-50 border-[#5E88FC] mt-2  ml-12 mr-12 rounded-md box-border' placeholder="Password"/>
      <button  className='h-11 mb-2 ml-12 mr-12 rounded-md box-border  bg-[#5E88FC] shadow-lg shadow-[#5E88FC]'>Login</button>
      <button  className='h-11 mb-2 ml-12 mr-12 rounded-md box-border  bg-[#5E88FC] shadow-lg shadow-[white]'>Creat a new account</button>
   
    </form>

    </div>

  )
}

export default Login