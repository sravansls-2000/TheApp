import React from 'react'



const Register = (props) => {

const signIN=()=>{
props.clicked("signin")
}
  return (
    <div className='pr-11'>
    <form className='mt-11 mb-11 w-full h-[500px] rounded-md shadow-lg bg-[#ffffff] shadow-cyan-500/50' >
      <input  name="dateOfBirth"  className='h-11  border-2 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 focus:border-opacity-50 border-[#264E86] mt-2  ml-12 mr-12 rounded-md box-border' placeholder="Enter Your Email"/>
      <input  name="Email" className='h-11  border-2 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 focus:border-opacity-50 border-[#264E86] mt-2  ml-12 mr-12 rounded-md box-border' placeholder="Date of Birth"/>
      <input  name="PhoneNumber" className='h-11  border-2 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 focus:border-opacity-50 border-[#264E86] mt-2  ml-12 mr-12 rounded-md box-border' placeholder=" Enter PhoneNumber"/>
      <input  name="ConfirmPassword" className='h-11  border-2 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 focus:border-opacity-50 border-[#264E86] mt-2  ml-12 mr-12 rounded-md box-border' placeholder="Password"/>
      <input  name="PassWord" className='h-11  border-2 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 focus:border-opacity-50 border-[#264E86] mt-2  ml-12 mr-12 rounded-md box-border' placeholder="Confirm Password"/>
      <button  className='h-11 mb-2 ml-12 mr-12 rounded-md box-border text-[white]  bg-[#264E86] shadow-lg shadow-[#264E86]' type='submit' onClick={signIN}>Sign IN</button>
   </form>

    </div>

  )
}

export default Register
