import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import CartPage from './screens/Cart';
import CategoryPage from './screens/CategoryPage';
import SearchResults from './screens/SearchResults';
import BookDetail from './screens/BookDetail';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import OrderPage from './screens/OrderPage';
import CategoryBookPage from './screens/CategoryBookPage';

function App() {
  return (
    <UserProvider> 
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/category/:categoryName" element={<CategoryBookPage />} />

        </Routes>
      </Router>
    </CartProvider>
      </UserProvider>
  );
}

export default App;
