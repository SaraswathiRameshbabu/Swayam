const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  createCourse,
  getAllCourses,
  getCourseById,
} = require('../controllers/course');

router.post('/', auth, createCourse);          
router.get('/', getAllCourses);               
router.get('/:id', getCourseById);             

module.exports = router;
