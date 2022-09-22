import React from 'react'
import Navbar from '../Navbar/Navbar'


const Banner = () => {
  return (
    <div className=''>
    <div
     className='relative bg-gradient-to-r from-red-800 to-[#120000] w-full h-[25vh] lg:h-[70vh] bg-blue-700'>
    <Navbar />
     <img
      className='absolute h-[20vh] lg:h-[65vh] bottom-0 right-5 lg:left-56'
      src="https://res.cloudinary.com/zarmariya/image/upload/v1661935587/gym-assinmet1-removebg-preview_hf4jkr.png" alt="" />
     <img
      className='absolute h-32 lg:h-[55vh] bottom-1 sm:left10  lg:right-28'
      src="https://res.cloudinary.com/zarmariya/image/upload/v1661935482/gym-assinment_2_zjhqse.png" alt="" />
     
      </div>
    </div>
  )
}

export default Banner
