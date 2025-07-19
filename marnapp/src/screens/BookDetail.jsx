// screens/BookDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import booksData from '../data/books.json';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
// import './BookDetail.css';

const BookDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const book = booksData.find(b => b.id === parseInt(id));

  if (!book) return <h2>Book not found!</h2>;

  return (
    <>
    <Navbar/>
    <div style={{ display: 'flex', padding: '60px', gap: '50px'}} className='container'>
      <div style={{ flex: '1' }}>
        <img src={book.image} alt={book.name} style={{ width: '100%', borderRadius: '10px'}} />
      </div>
      <div style={{ flex: '2' }}>
        <h1>{book.name}</h1>
        <p><strong>Description:</strong> {book.about}</p>
        <p><strong>Rating:</strong> {book.rating}</p>
        <p><strong>Price:</strong> ₹{book.price}</p>
        <button onClick={() => addToCart(book)}>Add to Cart</button>
        <button style={{ marginLeft: '10px' }}>Order Now</button>
      </div>
    </div>
    </>
  );
};

export default BookDetail;
