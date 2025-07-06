import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
        await axios.post(
        'http://localhost:5000/api/tasks',
        { title, description },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      onTaskAdded(); // to refresh task list
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Failed to add task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="border p-2 w-full"
      />
      <textarea
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
