// routes/admittedStudentRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../db'); // Assumes you've set up a `db.js` file for your MySQL connection

// Add Trainer for Student
router.post('/addmitstudent', async (req, res) => {
  const { student_id, trainer_id } = req.body;

  if (!student_id || !trainer_id) {
    return res.status(400).send({ error: 'Student ID and Trainer ID are required' });
  }

  try {
    const sql = 'INSERT INTO admitted_students (student_id, trainer_id) VALUES (?, ?)';
    const [result] = await db.query(sql, [student_id, trainer_id]);
    res.status(201).send({ message: 'Trainer added for student', result });
  } catch (err) {
    console.error('Error adding trainer for student:', err);
    res.status(500).send({ error: 'Database error' });
  }
});

// Get All Students for Trainer
router.get('/all-students/:trainerId', async (req, res) => {
  const trainerId = req.params.trainerId;

  if (!trainerId) {
    return res.status(400).send({ error: 'Trainer ID is required' });
  }

  try {
    const sql = `
      SELECT users.* FROM users
      JOIN admitted_students ON users.user_id = admitted_students.student_id
      WHERE admitted_students.trainer_id = ? AND users.role = 'user'
    `;
    const [results] = await db.query(sql, [trainerId]);
    res.status(200).send(results);
  } catch (err) {
    console.error('Error fetching students for trainer:', err);
    res.status(500).send({ error: 'Database error' });
  }
});

// Get Trainers for Student
router.get('/get-my-trainer/:studentId', async (req, res) => {
  const studentId = req.params.studentId;

  if (!studentId) {
    return res.status(400).send({ error: 'Student ID is required' });
  }

  try {
    const sql = `
      SELECT users.* FROM users
      JOIN admitted_students ON users.user_id = admitted_students.trainer_id
      WHERE admitted_students.student_id = ? AND users.role = 'trainer'
    `;
    const [results] = await db.query(sql, [studentId]);
    res.status(200).send(results);
  } catch (err) {
    console.error('Error fetching trainers for student:', err);
    res.status(500).send({ error: 'Database error' });
  }
});

module.exports = router;
