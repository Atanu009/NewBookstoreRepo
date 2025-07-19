import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './auth.css';
import Navbar from '../components/Navbar'; // Navbar without login/signup buttons

const Signup = () => {
   <Navbar hideAuth={true} />
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://bookstore-api-b34m.onrender.com/api/signup', form);
      if (res.data.success) {
        alert('✅ Signup successful!');
        navigate('/login'); // Redirect to login
      } else {
        alert('❌ Signup failed. Try again.');
      }
    } catch (err) {
      console.error(err);
      alert('❌ Error during signup.');
    }
  };

  return (
    <>
      <Navbar hideAuth={true} />
      <div className="auth-container">
        <form className="auth-form" onSubmit={handleSignup}>
          <h2>Sign Up</h2>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Create a password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign Up</button>
          <p>Already have an account? <a onClick={() => navigate('/login')}>Login here</a></p>
        </form>
      </div>
    </>
  );
};

export default Signup;
