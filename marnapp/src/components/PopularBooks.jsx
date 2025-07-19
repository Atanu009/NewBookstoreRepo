import React from 'react';
import books from '../data/books.json';
import BookCard from './BookCard';
import './PopularBooks.css';

const PopularBooks = ({ addToCart }) => {
  return (
    <div className="popular-books-section">
      <h2 className="section-title">Popular Books</h2>
      <div className="scroll-wrapper">
        <div className="scroll-container">
          {books.map((book) => (
            <BookCard key={book.id} book={book} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularBooks;
