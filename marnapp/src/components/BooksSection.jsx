// src/components/BookGridSection.jsx
import React, { useEffect, useState } from 'react';
import booksData from '../data/books.json';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './BooksSection.css'; // Optional for CSS

const BooksSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredBooks(booksData.slice(0, 9)); // Limit to 9 books
    } else {
      const filtered = booksData
        .filter(book => book.category.toLowerCase() === selectedCategory.toLowerCase())
        .slice(0, 9);
      setFilteredBooks(filtered);
    }
  }, [selectedCategory]);

  const categories = ['All', 'Story', 'Comic', 'Biopic', 'Psychology', 'Religion'];

  return (
    <div className="section-container">
      <h2 className="section-title">Explore Books by Category</h2>
      <div className="category-buttons">
        {categories.map(cat => (
          <button
            key={cat}
            className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="book-grid">
        {filteredBooks.map(book => (
          <div key={book.id} className="book-card">
            <img
              src={book.image}
              alt={book.name}
              className="book-image"
              onClick={() => navigate(`/book/${book.id}`)}
            />
            <h4>{book.name}</h4>
            <p>{book.about.slice(0, 60)}...</p>
            <p><strong>Rating:</strong> {book.rating}</p>
            <p><strong>Price:</strong> ₹{book.price}</p>
            <button onClick={() => addToCart(book)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksSection;
