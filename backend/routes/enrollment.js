const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  enrollInCourse,
  getEnrolledCourses,
} = require('../controllers/enrollment');

router.post('/', auth, enrollInCourse);          
router.get('/', auth, getEnrolledCourses);      

module.exports = router;
