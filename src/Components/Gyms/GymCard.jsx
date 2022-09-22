import React from 'react'
import './Gym.css'

const GymCard = ({gymName,adress1,adress2,duration_text,distance_text,handleGymDetail,gymImg}) => {
  return (
   <div
    onClick={handleGymDetail}
    className='flex justify-center relative rounded-md'>
    <div className='w-[45%] h-[40vh] '>
     <img
      className='w-full h-full'
      src={gymImg} alt="" />
     
    </div>
    <div className='fadout'></div>
    <div className='w-[55%] text-white pl-20 z-20'>

     {gymName && <h1 className='text-lg font-bold pt-5 '>{gymName}</h1>}
     <p>{adress1}, { adress2}</p>
     {duration_text && <p>{duration_text} away | { distance_text}</p>}
     
     </div>
    </div>
  )
}

export default GymCard
