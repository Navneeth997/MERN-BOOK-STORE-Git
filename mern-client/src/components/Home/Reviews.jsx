
import React, { useRef, useState } from 'react';
// Import Swiper React components

import {  } from "react-icons";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import ReviewSwiper from '../ReviewSwiper';

// import './styles.css';

const Reviews =  () => {

  return (
    <div className='my-12 px-4 lg:px-24'>
      <h2 className='text-5xl text-center font-bold mb-10 leading-snug text-black my-5'> Our Customers</h2>
      {/* cards */}
      <ReviewSwiper/>
     
    </div>
  )
}


export default Reviews;
