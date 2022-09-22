import React from 'react'

const Service = ({name,img}) => {
  return (
    <div className='flex flex-col items-center text-white p-5 text-center space-y-3 justify-center rounded-sm bg-red-800 ml-2 mt-2 w-40 h-40'>
    <img className='w-10 h-10' src={img} alt="" />
    <p className='text-lg  '>{ name}</p>
    </div>
  )
}

export default Service