import React from 'react'
import FavBookImg from "../../assets/favoritebook.jpg"
import {Link} from 'react-router-dom'

const FavouriteBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
      <div className='md:w-1/2'>
      <img src={FavBookImg} alt="" className='rounded md:w-10/12'/>
      </div>

      <div className='md:w-1/2 space-y-6'>
        <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your <span className='text-blue-700'> Favourites </span></h2>
        <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus laboriosam possimus qui suscipit.
         Expedita enim minima magni natus culpa aliquid voluptates quam, molestiae nostrum! Accusantium nisi nobis praesentium mollitia vel.</p>

      <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
        <div className=''>
          <h3 className='text-3xl font-bold'>800+</h3>
          <p className='text-base'>Book Listing</p>
        </div>

        <div className=''>
          <h3 className='text-3xl font-bold'>550+</h3>
          <p className='text-base'>Register User</p>
        </div>

        <div className=''>
          <h3 className='text-3xl font-bold'>1200+</h3>
          <p className='text-base'>PDF Downloads</p>
        </div>

        </div>
        <Link className='mt-12 block' to='/shop'> <button className='bg-blue-700 text-white font-semibold px-5 py-2 
        rounded hover:bg-black transition-all duration-300'>Explore More</button> </Link>
        
      </div>
      
    </div>
  )
}

export default FavouriteBook;
