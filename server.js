const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/course');

dotenv.config();        // Load environment variables from .env file
connectDB();            // Connect to MongoDB

const app = express();

app.use(cors());                // Enable CORS
app.use(express.json());        // Parse JSON bodies

// Routes
app.use('/api/auth', authRoutes);       // Register/Login/Profile
app.use('/api/courses', courseRoutes);  // Course creation, listing, viewing

// Root endpoint (optional)
app.get('/', (req, res) => {
  res.send('Swayam Clone API is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
