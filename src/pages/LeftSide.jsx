import React from 'react'
import Logo from '../assets/Logo.png';
import leftBackground from '../assets/Left Background.png'
function LeftSide() {
  return (
    <div className="relative hidden h-screen   md:flex md:w-2/5    justify-around items-center ">
        <img src={leftBackground} alt="" className="w-full h-full object-cover" />
             <div className='absolute flex'>
               <img src={Logo} alt="" className=''/>
        <h1 className="text-gray-text mt-2 ml-3 font-bold text-4xl font-sans  ">Students <span className=' text-gray-text font-thin'>Inc</span></h1>
      </div>
      </div>
  )
}

export default LeftSide