import React from 'react';
import './BookCard.css';
import { useNavigate } from 'react-router-dom';

const BookCard = ({ book, addToCart }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(book);
    navigate('/cart'); // ✅ redirect to cart
  };

  return (
    <div className="book-card">
      <img src={book.image} alt={book.name} className="book-image" />
      <h5>{book.name}</h5>
      <p className="price">₹{book.price}</p>
      <p className="rating">⭐ {book.rating}</p>
      <div className="card-btn-container">
        <button className="btn btn-warning btn-sm" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookCard;
