const Course = require('../models/course');

// Create course
exports.createCourse = async (req, res) => {
  try {
    const course = new Course({
      title: req.body.title,
      description: req.body.description,
      instructor: req.user.id,
    });

    const saved = await course.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: 'Course creation failed', error: err.message });
  }
};

// Get all courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate('instructor', 'name email');
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching courses' });
  }
};

// Get a single course
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate('instructor', 'name email');
    if (!course) return res.status(404).json({ message: 'Course not found' });

    res.json(course);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching course' });
  }
};
