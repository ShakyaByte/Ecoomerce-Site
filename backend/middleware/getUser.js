const jwt = require('jsonwebtoken');
const JWT_SECRET = "your_secret_key"; // Use a strong secret key stored in environment variables

// Middleware function to get user data from token
const getUser = (req, res, next) => {
    // Get the token from the request header
    const token = req.header('auth-token');
    
    // If no token is provided, deny access
    if (!token) {
        return res.status(401).json({ error: "Access denied. No token provided." });
    }

    try {
        // Verify the token and extract user data
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded.user; // Attach user data to request object
        next(); // Proceed to the next middleware/controller
    } catch (error) {
        res.status(401).json({ error: "Invalid token. Authentication failed." });
    }
};

module.exports = getUser;
