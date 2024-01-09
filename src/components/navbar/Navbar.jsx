import React, { useEffect, useState } from 'react'
import { BiPhoneCall,BiSolidMoon,BiSolidSun} from 'react-icons/bi'
import {FaCaretDown} from 'react-icons/fa'
import {HiMenuAlt1,HiMenuAlt3} from 'react-icons/hi'
import Responsive from './Responsive'

const Navbar = () => {

  const [theme,setTheme] = useState(
    localStorage.getItem('theme')?localStorage.getItem('theme'):'light'
  )

  const element = document.documentElement
  const [showMenu , setshowMenu] = useState(false)

 useEffect(()=>{
  if (theme === 'dark') {
    element.classList.add('dark')
    localStorage.setItem('theme','dark')
    
  } else {
    element.classList.remove('dark')
    localStorage.setItem('theme', 'light');
  }

 },[theme])
 const changeTheme = ()=>{
  if(theme ==='dark'){
      setTheme('light')
  }else{
      setTheme('dark')
  }
}

  return (
    <div className='container bg-[#5b21b5] text-white flex items-center justify-between h-[10rem] dark:bg-gray-800 dark:text-white'>
      {/* logosection */}
      <div className="logo">
        <h1 className='text-2xl sm:text-3xl font-bold'>web <span className='text-primary inline-block'>Dev</span></h1>
      </div>
      {/* desktopnavsection */}
      <div className="list md:flex hidden gap-10">
        <ul className='flex items-center gap-5'>
          <li className='group relative'>
            <a href="#" className='flex gap-[2px]   items-center h-[74px] '>Home
            <span><FaCaretDown className='group-hover:rotate-180 transition-all duration-300 '/></span>
            </a>
            {/* dropdownsection */}
            <div className='bg-white shadow-sm p-2 text-black absolute z-[9999] w-[120px] -left-9 hidden group-hover:block transition-all duration-200'>
              <ul className='flex items-center flex-col gap-2'>
                <li >Home1</li>
                <li>Home2</li>
                <li>Home3</li>
              </ul>
            </div>
           
            </li>
          <li>about</li>
          <li className='group'><a href="#" className='flex gap-[2px] h-[74px] items-center'>service
          <span><FaCaretDown className='group-hover:rotate-180 transition-all duration-300 '/></span>
          </a>
          {/* dropdownsection */}
          <div className='absolute left-0 w-full bg-white text-black shadow-md py-6 z-[999] hidden group-hover:block'>
           <div className="grid grid-cols-3 gap-5 w-[95%] mx-auto">
            <div className='overflow-hidden'>
              <img src="https://picsum.photos/200" alt="not found" className='max-h-[300px] w-full rounded-2xl object-fill' />
            </div>
            <div className='col-span-2'>
              <h1 className='text-2xl font-bold pb-3'>Best selling</h1>
              <p className='text-sm '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum soluta praesentium nostrum voluptas, reiciendis, minus provident perspiciatis dolore quasi modi totam odit cupiditate quas excepturi. Mollitia laudantium tempore quidem facere!</p>
              <div className="grid grid-cols-3 mt-4">
                <div className='py-4'>
                  <h1 className='text-xl font-bold'>Devlepment</h1>
                  <ul>
                    <li>mobile Devlepment</li>
                    <li>app Devlepment</li>
                    <li>site Devlepment</li>
                  </ul>
                </div>
                <div className='py-4'>
                <h1 className='text-xl font-bold'>Other Service</h1>
                  <ul>
                    <li>mobile Devlepment</li>
                    <li>app Devlepment</li>
                    <li>site Devlepment</li>
                  </ul>
                </div>
                <div> <img src="https://picsum.photos/120" alt="not found" className='max-h-[300px] w-full rounded-2xl object-fill' /></div>
              </div>
            </div>
           

           </div>
          </div>
          </li>

         <li>
         <div className='flex gap-6 items-center'>
         <div>
            <BiPhoneCall className='text-2xl sm:text-3xl'/>
          </div>
         <div >
            <p>call us on</p>
            <p>9461878300</p>
          </div>
          <div className='transition-all duration-300'>
            {
              theme ==='dark'?<BiSolidMoon className='text-2xl sm:text-3xl' onClick={changeTheme}/>:<BiSolidSun className='text-2xl sm:text-3xl' onClick={changeTheme}/>
            }
            
          </div>
         </div>
         </li>

        </ul>


      </div>


      {/* mobilsection */}
      <div className="flex gap-4 items-center md:hidden">
          
            {
              theme ==='dark'?<BiSolidMoon className='text-2xl sm:text-3xl' onClick={changeTheme}/>:<BiSolidSun className='text-2xl sm:text-3xl' onClick={changeTheme}/>
            }

            {
              showMenu ? <HiMenuAlt1 className='text-2xl' onClick={()=>setshowMenu(!showMenu)}/>:<HiMenuAlt3 className='text-2xl' onClick={()=>setshowMenu(!showMenu)}/>
            }

            
            
          


      </div>
      <Responsive showMenu={showMenu}/>

    </div>
  )
}

export default Navbar
