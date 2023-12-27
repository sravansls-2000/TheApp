import React from 'react'
import { BsLinkedin,BsInstagram,BsGithub,BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='bg-[#264E86] w-full h-[85px] text-[white]  '>
    <div className='flex justify-center space-x-10 pt-3'>
      <p className='text-[40px]'><BsLinkedin/></p>
      <p className='text-[40px]'><BsInstagram/></p>
      <p className='text-[40px]'><BsGithub/></p>
      <p className='text-[40px]'><BsFacebook/></p>
      </div>
      <div className='flex justify-center space-x-10 pt-3'>
      <h2>Created by sravan</h2>
      </div>
    </div>
  )
}

export default Footer