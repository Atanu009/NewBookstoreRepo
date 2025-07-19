// src/pages/SearchResults.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';
import booksData from '../data/books.json'; // ✅ Adjust the path if needed

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("q")?.toLowerCase() || "";

  const filteredBooks = booksData.filter(book =>
    book.name.toLowerCase().includes(searchTerm) ||
    book.about.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="container mt-5">
      <h3>Search results for: <span className="text-warning">"{searchTerm}"</span></h3>
      <div className="row">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (
            <div className="col-md-3 mb-4" key={book.id}>
              <div className="card h-100">
                <img src={book.image} className="card-img-top" alt={book.name} />
                <div className="card-body">
                  <h5 className="card-title">{book.name}</h5>
                  <p className="card-text">Rating: ⭐{book.rating}</p>
                  <p className="card-text">Price: ₹{book.price}</p>
                  <button className="btn btn-warning w-100">Add to Cart</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
