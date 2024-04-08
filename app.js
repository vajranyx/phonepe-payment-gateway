// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const routes = require('./routes/routes');
// const connectDB = require('./db/db');

// dotenv.config(); // Load environment variables from .env file

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// connectDB();

// // Routes
// app.use('/api', routes);

// // Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server started in development mode on port ${PORT}`));





const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes/routes');
const connectDB = require('./db/db');

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', routes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started in development mode on port ${PORT}`));
