import React, { useState } from 'react';
import './FeedbackSection.css'; // optional CSS for spacing and responsiveness

const FeedbackSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    setFormData({ name: '', email: '', feedback: '' });
    // Later: Send this to backend (e.g. using Axios)
  };

  return (
    <div className="container my-5" id="feedback">
      <div className="row align-items-center">
        {/* Left Side: Feedback Form */}
        <div className="col-md-6">
          <h2 className="mb-4">Send Us Your Feedback</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>Feedback</label>
              <textarea
                className="form-control"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                rows="4"
                required
              />
            </div>
            <button type="submit" className="btn btn-warning">Submit</button>
          </form>
        </div>

        {/* Right Side: Book Image */}
        <div className="col-md-6 text-center">
          <img
            src="/assets/book_feedback.jpg"
            alt="Books Feedback"
            className="img-fluid rounded shadow"
            style={{ maxHeight: '400px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
