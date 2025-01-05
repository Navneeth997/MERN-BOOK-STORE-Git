import React, { useState } from 'react'
import { Button, Label, TextInput, Textarea } from "flowbite-react";

const UploadBooks = () => {

  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Biography",
    "Cookbook",
    "Mystery",
    "Adventure",
    "Sci-Fi",
    "History",
    "Thriller",
    "Romance",
    "Self-Help",
    "Poetry",
    "Business",
    "Cooking",
    "Art",
    "Health & Fitness",
    "Teen & Young Adult",
    "Family & Relationships",
    "Science & Math",
    "Gardening",
    "Politics",
    "Religion & Spirituality",
    "Film & Animation",
    "Children's",
    "Comics & Graphic Novels",
    "Games & Consoles",
    "Humour",
  ]

  const [selectedBookCategories,setSelectedBookCategories] = useState(bookCategories[0]);

  const handleCategoryChange = (event) => {
    // console.log(event.target.value)
       
    setSelectedBookCategories(event.target.value);
  };

  //Handle book submit

  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookData ={
      bookTitle: form.bookTitle.value,
      authorName: form.authorName.value,
      bookDescription: form.bookDescription.value,
      category: selectedBookCategories,
      imageURL: form.imageURL.value,
      bookPDFURL:form.bookPDFURL.value
      }
    alert("Book Uploaded succesfully")
    fetch("https://mern-book-store-frontend-dojc.onrender.com/upload-book", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookData)
    }).then(res=>res.json)
      .then(data=>console.log(data));
      //refresh page
      window.location.reload();

  };

  // send data to db
  // fetch("http://localhost:3000/upload-book").then(res=>res.json).then(data=>console.log(data));
 
  

  return (
    <div className='px-4 my-6'>
      <h2 className='mb-8 text-3xl font-bold'> Upload Book</h2>
    <form onSubmit={handleBookSubmit} className="my-4 flex lg:w-[1000px] flex-col flex-wrap gap-4">
    <div className='flex gap-8'>
      {/* Book Name */}
    <div className='lg:w-1/2'>
      <div className="mb-2 block">
        <Label 
        htmlFor="bookTitle" 
        value="Book Title" />
      </div>
      <TextInput 
      id="bookTitle" 
      name="bookTitle" type="text"
      placeholder="Book Name" 
      required
      autoComplete='off' />
    </div>
{/* Author Name */}
    <div className='lg:w-1/2'>
      <div className="mb-2 block">
        <Label 
        htmlFor="authorName" 
        value="Author Name" />
      </div>
      <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name" required autoComplete='off' />
    </div>
    
    </div>

{/* 2nd Row Section */}
    <div className='flex gap-8'>
      {/* Book imageURL */}
    <div className='lg:w-1/2'>
      <div className="mb-2 block">
        <Label 
        htmlFor="imageURL" 
        value="Book imageURL" />
      </div>
      <TextInput id="imageURL" name="imageURL" type="text" placeholder="Book imageURL" required autoComplete='off'/>
    </div>

{/*Category */}
    <div className='lg:w-1/2'>
      <div className="mb-2 block">
        <Label 
        htmlFor="inputState" 
        value="Category" />
      </div>
      <select name="category" id="inputState" className='w-full rounded'
       value={selectedBookCategories}
       onChange={handleCategoryChange}> 
       {
        bookCategories.map((category) => (
          <option key={category} value={category}>
            {category}
            </option>
        ))
       }
       
       </select>
    </div>
    </div>

{/* Third Row */}

<div className='gap-8'>
    {/* Book Description */}
    <div>
      <div className="mb-2 block">
        <Label 
        htmlFor="bookDescription" 
        value="Book Description" />
      </div>
 <Textarea id="bookDescription" 
 placeholder="Write your Book's description..." 
 required rows={5} 
 className='w-full'
 />    </div>
    </div>

{/* Book PDF URL*/}
    <div>
      <div className="mb-2 block">
        <Label 
        htmlFor="bookPDFURL" 
        value="Book PDF URL" />
      </div>
      <TextInput id="bookPDFURL" name="bookPDFURL" type="text" placeholder="Book PDF URL" required autoComplete='off'/>
    </div>

    <Button type="submit" className='my-5'>Upload Book</Button>
    
   
  </form>
  </div>
  )
}

export default UploadBooks;
