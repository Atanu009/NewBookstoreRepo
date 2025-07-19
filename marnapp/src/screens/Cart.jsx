// src/screens/Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';
import Navbar from '../components/Navbar'; // ✅ Navbar added
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cart, increaseQty, decreaseQty } = useCart();
  const navigate = useNavigate();

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleOrder = () => {
    alert('🛍️ Order placed successfully!');
    // Optional: navigate('/orders');
  };

  return (
    <>
      <Navbar /> {/* ✅ Reuse Navbar */}
      <div className="cart-bg"> {/* ✅ Background wrapper */}
        <div className="cart-container">
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div className="cart-card" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.about}</p>
                    <p>Price: ₹{item.price}</p>
                    <div className="qty-control">
                      <button onClick={() => decreaseQty(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQty(item.id)}>+</button>
                    </div>
                    <p>Total: ₹{item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
              <h3>Grand Total: ₹{totalAmount}</h3>
             <button className="btn btn-success" onClick={() => navigate('/order')}>
  Order Now
</button>

            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;
