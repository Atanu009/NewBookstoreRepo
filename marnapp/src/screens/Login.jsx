// src/screens/Login.jsx
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './auth.css';
import Navbar from '../components/Navbar';
import { UserContext } from '../context/UserContext';

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useContext(UserContext);
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://bookstore-api-b34m.onrender.com/api/login', form);
      if (res.data.success) {
        loginUser(res.data.userEmail); // ⬅️ Update context + localStorage
        navigate('/');
      } else {
        alert('❌ ' + res.data.message + ' Redirecting to signup...');
        navigate('/signup');
      }
    } catch (err) {
      console.error(err);
      alert('❌ Error during login.');
    }
  };

  return (
    <>
      <Navbar hideAuth={true} />
      <div className="auth-container">
        <form className="auth-form" onSubmit={handleLogin}>
          <h2>Login</h2>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
          <p>
            Don't have an account?{' '}
            <a href="#" onClick={() => navigate('/signup')}>
              Signup here
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
