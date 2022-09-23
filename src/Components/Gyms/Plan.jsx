import React from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';
import parse from 'html-react-parser';

const Plan = ({bgClass,btnClass,name,planNumber,plan_price,description}) => {
  return (
   <div className={`relative flex justify-between items-center ${bgClass} px-6 py-3 lg:py-5 rounded-md`}>
    <div>
    <h1 className='font-semibold text-lg'>PLAN { planNumber}</h1>
    <div className='flex items-center space-x-2'>
     <img className='w-10 h-10 rounded-lg' src="https://wtfup.me/apple-icon-72x72.png" alt="" />
     <h2 className='tex-lg lg:text-xl font-semibold lg:font-bold'>{name}</h2>
      
     </div>
     <div className='mt-4 text-sm lg:text-lg'>
     { parse(description)}
      
     <p className='leading-8 pr-5'></p>
     </div>
    </div>
    <div className={`absolute top-5 right-6 flex ${btnClass} p-1 px-5 items-center rounded-md`}>
     <p> ₹</p>
     <p className={`  `}>   {plan_price}</p>
    </div>
   
    
    </div>
  )
}

export default Plan
