import React from 'react'
import { IoIosReturnRight } from "react-icons/io";
const Button = ({title="Get started"}) => {
  return (
    <div className='min-w-40 px-3 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between font-sans '><span className='text-sm font-medium'>
       {title}</span>
        <IoIosReturnRight /> </div>
  )
}

export default Button