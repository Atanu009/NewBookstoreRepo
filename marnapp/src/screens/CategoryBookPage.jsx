import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import booksData from '../data/books.json';
import Navbar from '../components/Navbar';
import BookCard from '../components/BookCard';
import './CategoryBookPage.css'; // optional for styling

const CategoryBookPage = () => {
  const { categoryName } = useParams();
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const filtered = booksData.filter(
      (book) => book.category.toLowerCase() === categoryName.toLowerCase()
    );
    setFilteredBooks(filtered);
  }, [categoryName]);

  return (
    <>
      <Navbar />
      <div className="category-page container mt-4">
        <h2 className="text-center text-capitalize mb-4">{categoryName} Books</h2>
        <div className="row">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div className="col-md-3 mb-4" key={book.id}>
                <BookCard book={book} addToCart={() => {}} />
              </div>
            ))
          ) : (
            <p>No books found for this category.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryBookPage;
