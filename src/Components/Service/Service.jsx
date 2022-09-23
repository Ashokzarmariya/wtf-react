import React from 'react'

const Service = ({name,img}) => {
  return (
    <div className='flex flex-col items-center text-white py-4 px-2 text-center space-y-3 justify-center rounded-sm bg-[#920909] ml-4 mt-4 w-36 h-36'>
    <img className='w-10 h-10' src={img} alt="" />
    <p className=' '>{ name}</p>
    </div>
  )
}

export default Service
