const express = require('express');
const { check, validationResult, body } = require('express-validator'); // Import express-validator
const router = express.Router();
const User = require('../models/TestUser'); // ✅ Use uppercase for model names
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const JWT_SECRET = "your_secret_key";// Ensure this is defined 
const getUser = require('../middleware/getUser'); // Import the middleware

// Route to Add User with Validation
//authentication for user

router.post('/login',
    [
        check('email', 'Please enter a valid email').isEmail(),
        check('password', 'Password must be at least 6 characters long').exists(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            let user = await User.findOne({ email });
            if (!user) { 
                return res.status(400).json({ error: "User does not exist" });
            }

            const comparepassword = await bcrypt.compare(password, user.password);
            if (!comparepassword) {
                return res.status(400).json({ error: "Invalid password" });
            }

            const data = {
                user: {
                    id: user.id
                }
            };

            const authtoken = jwt.sign(data, JWT_SECRET);
            res.json({ authtoken });

        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
);

module.exports = router;


// Protected route to fetch user details
router.get('/getuser', getUser, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password"); // Exclude password
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
