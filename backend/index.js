const connectToMongo = require('./db');
const express = require('express');
const cors = require("cors");

connectToMongo();
const app = express();
const port = 5000;

// Middleware
app.use(cors({
  origin: "http://localhost:3000", // ✅ Allow frontend origin
  credentials: true, // ✅ Allow cookies and authentication headers
  methods: ["GET", "POST", "PUT", "DELETE"], // ✅ Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // ✅ Allowed headers
}));
app.use(express.json()); // ✅ Middleware to parse JSON

// Routes
app.use('/api/auth', require('./Routes/auth')); // Use of router
app.use('/register', require('./Routes/register')); // Use of router

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});