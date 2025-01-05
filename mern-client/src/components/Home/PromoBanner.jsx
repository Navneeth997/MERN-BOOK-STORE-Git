import React from 'react'
import {Link} from 'react-router-dom'
import BookPic from "../../assets/awardbooks.png"


const PromoBanner = () => {
  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-12'> 
        <div className='md:w-1/2'>
            <h2 className='text-4xl font-semibold mb-6 leading-snug'> 2024 National Book Awards For Fiction ShortList</h2>
            <Link className='block' to='/shop'> <button className='bg-blue-700 text-white font-semibold px-5 py-2 
        rounded hover:bg-black transition-all duration-300'>Get Promo </button> </Link>
        </div>

        <div>
            <img src= {BookPic} alt="" />
        </div>
      </div>
    </div>
  )
}

export default PromoBanner