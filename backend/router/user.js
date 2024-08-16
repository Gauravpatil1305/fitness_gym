const express = require('express');
const router = express.Router();
const db = require('../db'); // Adjust the path to your database connection


// Get the current logged-in user profile by ID
router.get('/profile', async (req, res) => {
  const userId = req.query.id;

  try {
    const query = 'SELECT user_id, username, email, first_name, last_name, phone_number, address, dob, gender FROM users WHERE user_id = ?';
    const [user] = await db.query(query, [userId]);
    
    if (user.length > 0) {
      res.status(200).json(user[0]);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get all users by role
router.get('/users/:role', async (req, res) => {
  const role = req.params.role;
  try {
    const query = 'SELECT user_id, username, email, first_name, last_name, phone_number, address, dob, gender FROM users WHERE role = ?';
    const [users] = await db.query(query, [role]);

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get user details by ID
router.get('/user-details/:id', async (req, res) => {
  const userId = req.params.id;
  
  try {
    const query = 'SELECT user_id, username, email, first_name, last_name, phone_number, address, dob, gender FROM users WHERE user_id = ?';
    const [user] = await db.query(query, [userId]);
    
    if (user.length > 0) {
      res.status(200).json(user[0]);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update user details by ID
router.patch('/user-details/:id', async (req, res) => {
    const userId = req.params.id;
    const data = req.body;
  
  
    // Extract fields from data
    const {
      first_name,
      last_name,
      phone_number,
      address,
      dob,
      gender
    } = data;
  
    try {
      // Prepare the SQL query for updating user details
      const updateQuery = `
        UPDATE users
        SET 
          first_name = ?, 
          last_name = ?, 
          phone_number = ?, 
          address = ?, 
          dob = ?, 
          gender = ?, 
          updated_at = NOW()
        WHERE user_id = ?`;
  
      // Execute the update query
      const [updateResult] = await db.query(updateQuery, [
        first_name,
        last_name,
        phone_number,
        address,
        dob,
        gender,
        userId
      ]);
  
      // Check if any rows were affected
      if (updateResult.affectedRows > 0) {
        // Prepare the SQL query to fetch updated user details
        const selectQuery = 'SELECT * FROM users WHERE user_id = ?';
        
        // Execute the select query
        const [rows] = await db.query(selectQuery, [userId]);
  
        // Return the updated user details
        res.status(200).json({
          message: 'User details updated successfully',
          user: rows[0]
        });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error('Error updating user details:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
// Update user password by ID
router.patch('/change-password/:id', async (req, res) => {
    const userId = req.params.id;
    const { current_password, new_password, confirm_new_password } = req.body;
  
 
  
    try {
      // Retrieve the user's current password
      const query = 'SELECT password FROM users WHERE user_id = ?';
      const [user] = await db.query(query, [userId]);
  
      if (user.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Check if the provided current password matches
      if (user[0].password !== current_password) {
        return res.status(401).json({ message: 'Current password is incorrect' });
      }
  
      // Check if new password and confirm new password match
      if (new_password !== confirm_new_password) {
        return res.status(400).json({ message: 'New passwords do not match' });
      }
  
      // Update the password
      const updateQuery = 'UPDATE users SET password = ? WHERE user_id = ?';
      const [updateResult] = await db.query(updateQuery, [new_password, userId]);
  
      if (updateResult.affectedRows > 0) {
        res.status(200).json({ message: 'Password updated successfully' });
      } else {
        res.status(500).json({ message: 'Failed to update password' });
      }
    } catch (error) {
      console.error('Error updating password:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

module.exports = router;
