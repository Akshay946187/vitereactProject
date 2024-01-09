import React from 'react'
import Cart from './Cart'
import img1 from '../../assets/banner.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'

const Blogs = () => {
  return (
    <div className='container pt-4 pb-4 text-center bg-slate-200 dark:bg-slate-700 dark:text-white'>
        <h1 className='text-2xl sm:text-3xl font-bold pb-6'>Our Latest Blogs</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <Cart img={img1}/>
        <Cart img={img2}/>
        <Cart img={img3}/>

        </div>
      
    </div>
  )
}

export default Blogs
