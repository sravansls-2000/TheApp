import React from 'react'
import Login from '../Login/Login'
import Footer from './footer'
const Home = () => {
  return (
    <div>
    
    <div className='grid grid-cols-2 gap-4 auto-cols-auto'>
    <div className='max-w-full max-h-full'>
      <h1 className='text-3xl'>learing is the stepping stone of skills</h1>
    </div>
    <div className='max-w-full max-h-full'><Login/></div>
    </div>
    <Footer/>
    </div>
  )
}

export default Home