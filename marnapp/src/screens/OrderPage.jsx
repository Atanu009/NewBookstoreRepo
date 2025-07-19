import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './OrderPage.css'; // You can style it if needed

const OrderPage = () => {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    paymentMethod: 'COD',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePay = (e) => {
    e.preventDefault();
    alert(`✅ Order Placed!\n\nName: ${form.fullName}\nPhone: ${form.phone}\nCity: ${form.city}\nPayment: ${form.paymentMethod}`);
    // Optionally clear cart / redirect to success page
  };

  return (
    <>
      <Navbar />
      <div className="order-page-container container my-5">
        <h2 className="mb-4 text-center">🧾 Shipping & Payment Details</h2>
        <form className="row g-3" onSubmit={handlePay}>
          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Phone</label>
            <input
              type="tel"
              className="form-control"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12">
            <label className="form-label">Address</label>
            <textarea
              className="form-control"
              name="address"
              rows="3"
              value={form.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              value={form.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Pincode</label>
            <input
              type="text"
              className="form-control"
              name="pincode"
              value={form.pincode}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12">
            <label className="form-label">Payment Method</label>
            <select
              className="form-select"
              name="paymentMethod"
              value={form.paymentMethod}
              onChange={handleChange}
            >
              <option value="COD">Cash on Delivery</option>
              <option value="UPI">UPI</option>
              <option value="Card">Debit/Credit Card</option>
            </select>
          </div>

          <div className="col-12 text-center">
            <button type="submit" className="btn btn-warning px-5">Pay Now</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default OrderPage;
