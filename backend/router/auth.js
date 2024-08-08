const express = require('express');
const router = express.Router();
const db = require('../db'); // Adjust the path to your database connection
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "your_secret_key"; // Replace with a strong secret key

const transporter = nodemailer.createTransport({
    host: "consulting.prabisha.com",
    port: 587,
    secure: false,
    auth: {
      user: "info@prabisha.com",
      pass: "ElzAeL6n",
    },
  });
  
transporter.verify((error) => {
    if (error) {
      console.error("Nodemailer verification failed:", error);
    } else {
      console.log("Nodemailer bhi ready hai!");
    }
});

// User Registration Endpoint
router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if the email or username already exists in the database
        const emailCheckQuery = "SELECT * FROM users WHERE email = ?";
        const usernameCheckQuery = "SELECT * FROM users WHERE username = ?";
        const [emailResults] = await db.query(emailCheckQuery, [email]);
        const [usernameResults] = await db.query(usernameCheckQuery, [username]);

        if (emailResults.length > 0) {
            return res.status(409).json({ success: false, message: "Email is already registered" });
        }

        if (usernameResults.length > 0) {
            return res.status(409).json({ success: false, message: "Username is already taken" });
        }

        // Insert the new user into the database
        const insertQuery = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        const [result] = await db.query(insertQuery, [username, email, password]);

        if (result.affectedRows === 1) {
            console.log("User registered successfully");

            // Send email with login details
            const mailOptions = {
                from: "info@prabisha.com",
                to: email,
                subject: "Registration Successful - Login Details",
                text: `Dear ${username},\n\nYour registration was successful. Here are your login details:\n\nEmail: ${email}\nPassword: ${password}\n\nThank you for registering with us.\n\nBest Regards,\nPrabisha Team`,
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return res.status(500).json({
                        success: false,
                        message: "Registration successful, but failed to send email",
                    });
                } else {
                    res.status(201).json({
                        success: true,
                        message: "User registered successfully and email sent",
                    });
                }
            });
        } else {
            res.status(500).json({ success: false, message: "Failed to register user" });
        }
    } catch (error) {
        console.error("Internal Server Error:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

// User Login Endpoint
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const query = "SELECT user_id, username, email, password, role FROM users WHERE email = ?";
        const [results] = await db.query(query, [email]);

        if (results.length > 0) {
            const user = results[0];

            if (password === user.password) {
                // Create JWT token
                const token = jwt.sign(
                  { user_id: user.user_id, email: user.email, username: user.username, role: user.role },
                  SECRET_KEY,
                  { expiresIn: "2h" }
              );
                res.status(200).json({ success: true, message: "Login successful", jwtToken: token });
            } else {
                res.status(401).json({ success: false, message: "Wrong email or password" });
            }
        } else {
            res.status(401).json({ success: false, message: "Wrong email or password" });
        }
    } catch (error) {
        console.error("Internal Server Error:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

module.exports = router;
