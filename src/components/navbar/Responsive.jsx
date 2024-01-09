import React from 'react'

const Responsive = ({showMenu}) => {
  return (
    <div className={`${showMenu? 'left-[-100%]':'left-0'} h-screen w-[75%] bg-red-400 transition-all duration-500 fixed top-0 md:hidden`}>
      <ul className='flex flex-col gap-6 items-center text-black '>
        <li>home</li>
        <li>about</li>
        <li>Service</li>
        <li>Contact Us</li>
      </ul>
    </div>
  )
}

export default Responsive
