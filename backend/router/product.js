const express = require('express');
const router = express.Router();
const db = require('../db'); // Adjust the path to your database connection

// POST API to create a new bakery item
router.post("/products", async (req, res) => {
  try {
    const { user_id, item_name, description, price, category, quantity, date_added, expiration_date, is_available } = req.body;

    const insertQuery = `
      INSERT INTO bakery_items (user_id, item_name, description, price, category, quantity, date_added, expiration_date, is_available)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const [result] = await db.query(insertQuery, [user_id, item_name, description, price, category, quantity, date_added, expiration_date, is_available]);

    if (result.affectedRows === 1) {
      res.status(201).json({ success: true, message: "Product created successfully", item_id: result.insertId });
    } else {
      res.status(500).json({ success: false, message: "Failed to create product" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// GET API to fetch all bakery items
router.get("/products", async (req, res) => {
  try {
    const selectQuery = "SELECT * FROM bakery_items";
    const [rows] = await db.query(selectQuery);

    res.status(200).json({ success: true, products: rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = router;
