import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Banner.css"


const Banner = () => {
  return (
    <div className=''>
    <div
     className='relative bg-gradient-to-r from-red-800 to-[#120000] w-full h-[30vh] lg:h-[70vh] bg-blue-700'>
    <Navbar />
     <img
      className='absolute h-[20vh] lg:h-[65vh] bottom-0 right-5 lg:left-56 z-10'
      src="https://res.cloudinary.com/zarmariya/image/upload/v1661935587/gym-assinmet1-removebg-preview_hf4jkr.png" alt="" />
     <img
      className='z-10 absolute h-32 lg:h-[55vh] bottom-1 sm:left10  lg:right-28'
      src="https://res.cloudinary.com/zarmariya/image/upload/v1661935482/gym-assinment_2_zjhqse.png" alt="" />
     
     <h1 className='absolute bottom-6 lg:bottom-20 powerd text-[4rem] lg:text-[17rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-red-700 to-[#260101] stroke-red-700'>Powerd</h1>
     <h1 className='z-20 absolute bottom-0 lg:bottom-8 right-2  lg:right-7 text-[3.5rem] lg:text-[11rem] font-bold lg:font-extrabold text-white'>GYM</h1>
      </div>
    </div>
  )
}

export default Banner
