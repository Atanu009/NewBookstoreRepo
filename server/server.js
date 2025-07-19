require('dotenv').config(); // Loads variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000; // Use port from environment or 5000

// CORS configuration to allow requests from your Vercel frontend
const corsOptions = {
    origin: "https://new-bookstore-repo.vercel.app",
    optionsSuccessStatus: 200 
};
app.use(cors(corsOptions));

app.use(express.json());

// MongoDB connection using environment variable
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.error('❌ MongoDB Error:', err));

// API routes
app.use('/api', authRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});