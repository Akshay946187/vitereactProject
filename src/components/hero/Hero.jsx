import React from 'react'
import img from '../../assets/img.svg'

const Hero = () => {
  return (
   <div className=' h-[650px] md:h-[500px] bg-gradient-to-r from-violet-950 to-violet-900 pt-20 '>
    <section className='container flex flex-col md:flex-row items-center justify-between dark:bg-gray-800 dark:text-white'>
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-white">
      {/* textcontant */}
      <div className="flex flex-col gap-4 items-center text-center">
      <h1 className='text-3xl md:text-4xl'>we build the best app aroound the world</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae assumenda, omnis aliquid quidem expedita accusamus velit vel exercitationem quaerat cum?</p>
      <div className='space-x-4'>
        <button className='py-2 px-4 bg-[#0070f3] text-white border-primary rounded-md text-sm border-2'>click me</button>
        <button className='  text-white border-2 border-white py-2 px-4 rounded-md text-sm uppercase'>click me</button>
      </div>
      </div>
      {/* textcontant */}
      {/* image */}
      <div className='mx-auto max-w-xs p-4'>
        <img src={img} alt="" className=''/>
      </div>
      {/* image */}
      

    </div>

    </section>

   </div>
  )
}

export default Hero
