import React, { useEffect, useState } from 'react'
import { Card } from "flowbite-react";

const Shop = () => {
  const[books,setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/all-books")
     .then((res) => res.json())
     .then((data) => setBooks(data));
  }, []);
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'> All Books are Here</h2>

      <div className='grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8 my-12'>
        {
          books.map(book =>
            <Card>
              <img src={book.imageURL} alt="" />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>{book.bookTitle}</p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      A propulsive and uncommonly wise novel about one unexpected wedding guest and the surprising people who help her start anew.
      </p>
      <button className='bg-blue-700 font-semibold text-white py-2 rounded  hover:bg-black transition-all duration-300'>Buy Now</button>
    </Card>
          )
        }

      </div>
      
    </div>
  )
}

export default Shop
