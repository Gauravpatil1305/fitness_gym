const express = require("express");
const router = express.Router();
const db = require("../db");

// Promisify the db.query method

// Get all meals for a user
// Get all meals for a user
router.get("/meal/:userId", async (req, res) => {
    try {
      const userId = req.params.userId;
      const results = await db.query("SELECT * FROM meals WHERE userId = ?", [userId]);
      res.status(200).json(results);
    } catch (err) {
      console.error("Database query error: ", err);
      res.status(500).json({ error: "Server error" });
    }
  });
   
// Create a new meal
router.post("/meal", async (req, res) => {
  const { userId, mealTitle, mealDuration } = req.body;
  console.log(req.body);

  if (!userId || !mealTitle || !mealDuration) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    const result = await db.query("INSERT INTO meals (userId, mealTitle, mealDuration) VALUES (?, ?, ?)", [userId, mealTitle, mealDuration]);

    res.status(201).json({
      success: true,
      meal: {
        id: result.insertId,
        userId,
        mealTitle,
        mealDuration,
      },
    });
  } catch (err) {
    console.error("Database query error: ", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
