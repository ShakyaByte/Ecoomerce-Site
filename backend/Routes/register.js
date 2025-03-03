const express = require('express');
const { check, validationResult, } = require('express-validator'); // Import express-validator
const router = express.Router();
const User = require('../models/TestUser'); // ✅ Use uppercase for model names
const bcrypt = require('bcryptjs');
/*const jwt = require("jsonwebtoken");
const JWT_SECRET = "your_secret_key";// Ensure this is defined */

router.post('/', //this is for creating an account//
    [
        check('name', 'Name is required').notEmpty(),
        check('email', 'Please enter a valid email').isEmail(),
        check('password', 'Password must be at least 6 characters long').isLength({ min: 6 })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body;

        try {
            // ✅ Check if user already exists
            let existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ error: "Email already in use" });
            }

            // ✅ Hash the password before saving
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // ✅ Save the user to MongoDB
            const user = new User({
                name,
                email,
                password: hashedPassword
            });

            await user.save();
            res.status(201).json({ message: "User registered successfully", user });

        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ error: "Server error" });
        }
    }
);

module.exports = router;