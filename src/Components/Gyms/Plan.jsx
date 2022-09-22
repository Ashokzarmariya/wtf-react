import React from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';

const Plan = ({bgClass,btnClass,name,planNumber,plan_price}) => {
  return (
   <div className={`flex justify-between items-center ${bgClass} px-6 py-4 rounded-md`}>
    <div>
    <h1 className='font-semibold text-lg'>PLAN { planNumber}</h1>
    <div className='flex items-center space-x-2'>
     <img className='w-10 h-10 rounded-lg' src="https://d1e9q0asw0l2kk.cloudfront.net/plan_upload/kld3PSdL7WIqV/1659632788594-Diet%20Plan%20PF.png" alt="" />
     <h2 className='text-xl font-bold'>{name}</h2>
    </div>
    </div>
    <div className='flex flex-col items-center text-2xl'>
     <p className={`p-1 px-4 ${btnClass} rounded-md`}>  ₹ {plan_price}</p>
    </div>
   
    
    </div>
  )
}

export default Plan
