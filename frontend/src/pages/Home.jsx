import { useEffect, useState } from 'react';
import axios from '../api/axios';

function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('/courses').then((res) => setCourses(res.data));
  }, []);

  const handleEnroll = async (courseId) => {
    try {
      await axios.post('/enrollments', { courseId });
      alert('Enrolled successfully');
    } catch (err) {
      alert(err.response?.data?.message || 'Enrollment failed');
    }
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Available Courses</h1>
      {courses.map((course) => (
        <div key={course._id} className="p-4 border rounded">
          <h2 className="text-xl">{course.title}</h2>
          <p>{course.description}</p>
          <p className="text-sm text-gray-600">Instructor: {course.instructor?.name}</p>
          <button onClick={() => handleEnroll(course._id)} className="mt-2 bg-green-600 text-white px-4 py-1">
            Enroll
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
