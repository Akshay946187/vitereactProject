import React from 'react'
import banner from '../../assets/banner.jpg'

const Banner = ({reverse}) => {
  return (
    <section className='bg-slate-100 dark:bg-slate-800 dark:text-white'>
        <div className="flex flex-col items-center justify-center py-10 md:h-[500px]">
            <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2 w-[90%] mx-auto">
                {/* textcontent */}
                <div className={`flex flex-col gap-4 ${reverse ? 'md:order-last':''}`}>
                    <h1 className='text-2xl md:text-4xl'>We build the best app around the world</h1>
                    <p className='text-sm text-slate-600 dark:text-slate-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur ipsum eligendi iste nostrum obcaecati vitae blanditiis animi amet autem.</p>
                    <div>
                        <ul className='flex  flex-col gap-3 list-inside list-disc'>
                            <li className='font-medium'>Lorem ipsum adipisicing elit. Cum, vel.</li>
                            <li className='font-medium'>Lorem ipsum adipisicing elit. Cum, vel.</li>
                            <li className='font-medium'>Lorem ipsum adipisicing elit. Cum, vel.</li>
                            
                        </ul>
                    </div>
                </div>
                <div className={`${reverse ? 'order-1':''} md:w-[450px] md:h-[450px] bg-slate-200 rounded-full flex items-center justify-center`}>
                    <img src={banner} alt=""  className='mx-auto w-full p-4 md:max-w-[400px] rounded-md'/>
                </div>

            </div>

        </div>

    </section>
  )
}

export default Banner
