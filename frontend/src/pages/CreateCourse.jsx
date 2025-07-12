import { useState } from 'react';
import axios from '../api/axios';

function CreateCourse() {
  const [form, setForm] = useState({ title: '', description: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/courses', form);
      alert('Course created!');
      setForm({ title: '', description: '' });
    } catch (err) {
      alert('Error: ' + err.response?.data?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto mt-10">
      <input name="title" placeholder="Course Title" value={form.title} onChange={handleChange} className="w-full p-2 border" />
      <textarea name="description" placeholder="Course Description" value={form.description} onChange={handleChange} className="w-full p-2 border" />
      <button type="submit" className="bg-green-600 text-white px-4 py-2">Create Course</button>
    </form>
  );
}

export default CreateCourse;
