
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {  } from "react-icons";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const BookCard = ({headline,books}) => {

  return (
    <div className='my-16 px-4 lg:px-24'>
      <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>
      {/* cards */}
      <div>

      </div>
<Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
  
        {/* Slides */}
       {
        books.map((book)=>{
          return(
            <SwiperSlide key={book._id}>
              <Link to={`/book/${book._id}`}>
              <div className='flex flex-col items-center'>
                <img src={book.imageURL} alt={book.bookTitle} className='w-35 h-52'/>
               

                <h3 className='text-lg font-bold text-black my-4'>{book.bookTitle}</h3>
                <p className='text-sm text-gray-500'>{book.authorName}</p>
                <div className=' absolute top-2 right-2 bg-blue-600 hover:bg-black p-2 rounded'>
                  <FaCartShopping className='w-4 h-4 text-white'/>
                </div>
              </div>
              </Link>
            </SwiperSlide>
          )
        })
       }
      </Swiper>
    </div>
  )
}

export default BookCard;
