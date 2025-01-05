import React from 'react'
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

import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";
import Propic from "../assets/profile.jpg";


const ReviewSwiper = () => {
  return (
       <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                </div>
            {/* Text */}
                <div className='mt-7'>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quaerat dolor eius doloribus ipsum assumenda voluptatem sunt ipsam nisi neque cumque, non eos vero dolores aspernatur cupiditate et dicta consectetur?</p>
                <Avatar img={Propic} alt="avatar of Jese" rounded 
                className='w-10 mb-4'/>
                <h5 className='text-lg font-medium'>Mark Ping</h5>
                <p className='text-base'>CEO , ABC Company</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                </div>
            {/* Text */}
                <div className='mt-7'>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quaerat dolor eius doloribus ipsum assumenda voluptatem sunt ipsam nisi neque cumque, non eos vero dolores aspernatur cupiditate et dicta consectetur?</p>
                <Avatar img={Propic} alt="avatar of Jese" rounded 
                className='w-10 mb-4'/>
                <h5 className='text-lg font-medium'>Mark Ping</h5>
                <p className='text-base'>CEO , ABC Company</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                </div>
            {/* Text */}
                <div className='mt-7'>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quaerat dolor eius doloribus ipsum assumenda voluptatem sunt ipsam nisi neque cumque, non eos vero dolores aspernatur cupiditate et dicta consectetur?</p>
                <Avatar img={Propic} alt="avatar of Jese" rounded 
                className='w-10 mb-4'/>
                <h5 className='text-lg font-medium'>Mark Ping</h5>
                <p className='text-base'>CEO , ABC Company</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                </div>
            {/* Text */}
                <div className='mt-7'>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quaerat dolor eius doloribus ipsum assumenda voluptatem sunt ipsam nisi neque cumque, non eos vero dolores aspernatur cupiditate et dicta consectetur?</p>
                <Avatar img={Propic} alt="avatar of Jese" rounded 
                className='w-10 mb-4'/>
                <h5 className='text-lg font-medium'>Mark Ping</h5>
                <p className='text-base'>CEO , ABC Company</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                </div>
            {/* Text */}
                <div className='mt-7'>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quaerat dolor eius doloribus ipsum assumenda voluptatem sunt ipsam nisi neque cumque, non eos vero dolores aspernatur cupiditate et dicta consectetur?</p>
                <Avatar img={Propic} alt="avatar of Jese" rounded 
                className='w-10 mb-4'/>
                <h5 className='text-lg font-medium'>Mark Ping</h5>
                <p className='text-base'>CEO , ABC Company</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                </div>
            {/* Text */}
                <div className='mt-7'>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quaerat dolor eius doloribus ipsum assumenda voluptatem sunt ipsam nisi neque cumque, non eos vero dolores aspernatur cupiditate et dicta consectetur?</p>
                <Avatar img={Propic} alt="avatar of Jese" rounded 
                className='w-10 mb-4'/>
                <h5 className='text-lg font-medium'>Mark Ping</h5>
                <p className='text-base'>CEO , ABC Company</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                </div>
            {/* Text */}
                <div className='mt-7'>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quaerat dolor eius doloribus ipsum assumenda voluptatem sunt ipsam nisi neque cumque, non eos vero dolores aspernatur cupiditate et dicta consectetur?</p>
                <Avatar img={Propic} alt="avatar of Jese" rounded 
                className='w-10 mb-4'/>
                <h5 className='text-lg font-medium'>Mark Ping</h5>
                <p className='text-base'>CEO , ABC Company</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                </div>
            {/* Text */}
                <div className='mt-7'>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quaerat dolor eius doloribus ipsum assumenda voluptatem sunt ipsam nisi neque cumque, non eos vero dolores aspernatur cupiditate et dicta consectetur?</p>
                <Avatar img={Propic} alt="avatar of Jese" rounded 
                className='w-10 mb-4'/>
                <h5 className='text-lg font-medium'>Mark Ping</h5>
                <p className='text-base'>CEO , ABC Company</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                </div>
            {/* Text */}
                <div className='mt-7'>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quaerat dolor eius doloribus ipsum assumenda voluptatem sunt ipsam nisi neque cumque, non eos vero dolores aspernatur cupiditate et dicta consectetur?</p>
                <Avatar img={Propic} alt="avatar of Jese" rounded 
                className='w-10 mb-4'/>
                <h5 className='text-lg font-medium'>Mark Ping</h5>
                <p className='text-base'>CEO , ABC Company</p>
                </div>
            </div>
        </SwiperSlide>

       
       
      </Swiper>
    </>
  )
}

export default ReviewSwiper;
