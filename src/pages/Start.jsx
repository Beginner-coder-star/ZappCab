import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className='h-screen w-full bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] flex flex-col justify-end'>
      <div className='bg-white bg-opacity-90 pb-8 py-6 px-4'>
        <h2 className='text-[30px] font-semibold text-center'>Get Started with ZappCab</h2>
        <Link 
          to='/login' 
          className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'
        >
          Continue
        </Link>
      </div>
    </div>
  )
}

export default Start
