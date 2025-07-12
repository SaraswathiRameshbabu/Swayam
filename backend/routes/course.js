const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  createCourse,
  getAllCourses,
  getCourseById,
} = require('../controllers/course');

router.post('/', auth, createCourse);           // Create course (protected)
router.get('/', getAllCourses);                 // Public: list all courses
router.get('/:id', getCourseById);              // Public: get course by ID

module.exports = router;
