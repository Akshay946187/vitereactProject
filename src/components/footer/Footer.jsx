import React from 'react'
import { FaFacebook, FaInstagram, FaLocationArrow, FaMobile, FaMobileAlt, FaWallet } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='text-white rounded-t-3xl bg-gradient-to-r from-violet-700 to-violet-950 py-3'>
        <div className="mx-auto max-w-[1200px] p-4 dark:bg-slate-900 dark:text-white">
            {/* footercontant */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-between gap-5'>
            <div>
            <h1 className='text-2xl sm:text-3xl font-bold'>web <span className='text-primary inline-block'>Dev</span></h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id iusto quaerat ipsam.</p>
            
            <br/>
            <div className='flex gap-1 items-center'>
                <FaLocationArrow/>
                <p>Jhujhunu, Rajasthan</p>
            </div>
            <div className='flex gap-1 items-center mt-2'>
                <FaMobileAlt/>
                
                <p>+91 9080706098</p>
            </div>
            </div>
            <div>
                <h1 className='text-2xl font-bold py-2'>Importent Links</h1>
                <ul className='flex flex-col gap-2 text-sm'>
                    <li>Home</li>
                    <li>about</li>
                    <li>services</li>
                    <li>Login</li>
                </ul>
            </div>
            <div>
                <h1 className='text-2xl font-bold py-2'>More Links</h1>
                <ul className='flex flex-col gap-2 text-sm'>
                    <li>Privicy Policy</li>
                    <li>About Us</li>
                    <li>Service</li>
                </ul>
            </div>
            <div className='flex flex-col gap-2 '>
                <h1 className='text-2xl font-bold'>Social Links</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, incidunt?</p>
                <input type="search" placeholder='Email' className='rounded-md'/>
                <div className='flex items-center justify-center gap-4 py-2'>
                    <FaInstagram className='text-3xl'/>
                    <FaFacebook className='text-3xl'/>
                    <FaWallet className='text-3xl'/>
                </div>
            </div>
            </div>
            {/* footercopyright
             */}
             <div className="bootem-footer">
                <p className='border-t-2 border-gray-300/50 py-6 text-center'>Copyright @ 2024. All rights reserved</p>
             </div>

        </div>
      
    </footer>
  )
}

export default Footer
