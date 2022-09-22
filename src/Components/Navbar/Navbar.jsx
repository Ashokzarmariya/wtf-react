import React, { useEffect, useState } from 'react'

const Navbar = () => {
 
 const [scrollState, setScrollState] = useState(false)

 useEffect(() => {
   let listener = document.addEventListener("scroll", e => {
     var scrolled = document.scrollingElement.scrollTop
     if (scrolled >= 120) {
       if (scrollState !== true) setScrollState(true)
     } else {
       if (scrollState !== false) setScrollState(false)
     }
   })
   return () => {
     document.removeEventListener("scroll", listener)
   }
 }, [scrollState])

 
  return (
    <div>
    <div className={`${scrollState?"bg-black":"bg-none"} z-10 flex justify-between items-center text-white px-28 py-1 fixed top-0 w-full`}>
     <div><img src="https://wtfup.me/apple-icon-72x72.png" alt="" /></div>
     <div className='flex space-x-8 items-center justify-center'><p>Fitness</p>
      <p>Nutrition</p>
      <p>Gyms</p>
      <p>Become Wtf Partner</p>
      <p>About Us</p>
      <p className='py-1 px-3 bg-red-800 rounded-sm'>Login</p>
     </div>
      </div>
    </div>
  )
}

export default Navbar
