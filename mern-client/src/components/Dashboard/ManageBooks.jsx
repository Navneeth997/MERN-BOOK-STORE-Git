import React, { useState,useEffect } from 'react';
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("https://mern-book-store-frontend-dojc.onrender.com/all-books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data))
      .catch((error) => console.error("Error fetching books:", error)); // Handle errors
  }, []);

  // Delete book
  const handleDelete = (Take)=>{
console.log(Take);
fetch(`https://mern-book-store-frontend-dojc.onrender.com/book/${Take}`,{
  method:'DELETE',
})
.then(res =>res.json())
.then(data => alert("book uploaded successfully!!",data))
//reload the page
  window.location.reload();
  }

  return (
    <div className='px-4 my-8'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>

      {/* Table */}
      
        <Table className="lg:w-[1000px]">
          <Table.Head>
            <Table.HeadCell>No.</Table.HeadCell>
            <Table.HeadCell>Book Name</Table.HeadCell>
            <Table.HeadCell>Author Name</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Edit or Manage</Table.HeadCell>

             </Table.Head>

          <Table.Body className="divide-y">
            {allBooks.map((book, index) => (
              <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800' key={book._id}>
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>{book.bookTitle}</Table.Cell>
                <Table.Cell>{book.authorName}</Table.Cell>
                <Table.Cell>{book.category}</Table.Cell>
                <Table.Cell>$999</Table.Cell>
                <Table.Cell> <Link to={`/admin/dashboard/edit-books/${book._id}`} 
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"> 
                  Edit</Link> 
                  <button onClick={()=>handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white hover:bg-sky-600 rounded'>Delete</button>
                  </Table.Cell>

                
              </Table.Row>
            ))}
          </Table.Body>
        </Table> {/* Added missing closing tag */}
    </div>
  );
};

export default ManageBooks;
