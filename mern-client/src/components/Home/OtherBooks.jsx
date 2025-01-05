
import React, { useEffect, useState } from "react";
import BookCard from "../BookCard";

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      fetch("https://mern-book-store-backend-d3wz.onrender.com/all-books")
        .then((res) => res.json())
        .then((data) => setBooks(data.slice(3,8)));
    }, []);
    return (
      <div>
        <BookCard books={books} headline="Other Books" />
      </div>
    );
  };
  

export default OtherBooks
