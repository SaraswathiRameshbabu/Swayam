import { useEffect, useState } from 'react';
import axios from '../api/axios';

function Dashboard() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('/enrollments').then((res) => setCourses(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">My Enrolled Courses</h1>
      {courses.length === 0 ? (
        <p>No courses enrolled yet.</p>
      ) : (
        courses.map((course) => (
          <div key={course._id} className="p-4 border mb-2 rounded">
            <h2 className="text-lg">{course.title}</h2>
            <p>{course.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;

