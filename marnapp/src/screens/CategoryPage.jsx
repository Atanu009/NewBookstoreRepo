import React from 'react';
import books from '../data/books.json';
import BookCard from '../components/BookCard';
import './CategoryPage.css';

const CategoryPage = ({ selectedCategory, addToCart }) => {
  const filteredBooks = selectedCategory === 'All'
    ? books
    : books.filter(book => book.category === selectedCategory);

  return (
    <div className="category-books-section">
      <h2 className="section-title">{selectedCategory} Books</h2>
      <div className="grid-container">
        {filteredBooks.slice(0, 12).map((book) => (
          <BookCard key={book.id} book={book} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
