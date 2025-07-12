const Enrollment = require('../models/enrollment');

// Enroll a student in a course
exports.enrollInCourse = async (req, res) => {
  try {
    const { courseId } = req.body;

    const alreadyEnrolled = await Enrollment.findOne({
      student: req.user.id,
      course: courseId,
    });

    if (alreadyEnrolled)
      return res.status(400).json({ message: 'Already enrolled in this course' });

    const enrollment = await Enrollment.create({
      student: req.user.id,
      course: courseId,
    });

    res.status(201).json({ message: 'Enrolled successfully', enrollment });
  } catch (err) {
    res.status(500).json({ message: 'Enrollment failed', error: err.message });
  }
};

// Get all courses a student is enrolled in
exports.getEnrolledCourses = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ student: req.user.id }).populate('course');
    res.json(enrollments.map(e => e.course));
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch enrolled courses' });
  }
};
