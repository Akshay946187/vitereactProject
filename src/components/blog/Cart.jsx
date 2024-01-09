import React from 'react'

const Cart = ({img}) => {
  return (
    <div className='p-4 shadow-lg dark:shadow-xl rounded-sm'>
        <div className="overflow-hidden">
            <img src={img} alt="" className='mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110' />
        </div>
        <div className='flex justify-between text-sm pt-2'>
            <p>april , 2022</p>
            <p>By Akshay</p>
        </div>
        <div className='flex flex-col gap-2 pt-1 justify-start'>
        <h1 className='font-bold line-clamp-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit molestiae, necessitatibus maxime eligendi doloremque officiis.</h1>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae explicabo vitae consequatur officia.</p>
        </div>
      
    </div>
  )
}

export default Cart
