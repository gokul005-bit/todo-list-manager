import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from '../components/TaskForm';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get('http://localhost:5000/api/tasks', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(response.data);
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    }
  };


  const handleDelete = async (taskId) => {
  const token = localStorage.getItem('token');
  try {
    await axios.delete(`http://localhost:5000/api/tasks/${taskId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // Refresh the list
    fetchTasks();
  } catch (error) {
    console.error("Failed to delete task:", error);
  }
};

  const handleToggleDone = async (taskId, currentDone) => {
  const token = localStorage.getItem('token');
  try {
    await axios.patch(
      `http://localhost:5000/api/tasks/${taskId}`,
      { done: !currentDone },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    fetchTasks(); // refresh the list after update
  } catch (error) {
    console.error('Failed to update task:', error);
  }
};

  
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="p-4 sm:p-8 max-w-3xl mx-auto min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-8 text-center text-purple-800 drop-shadow">
        Your Tasks
      </h1>
      <div className="mb-8">
        <TaskForm onTaskAdded={fetchTasks} />
      </div>
      <ul className="grid gap-6 sm:grid-cols-2">
        {/* 
          When the checkbox is checked/unchecked, handleToggleDone is called.
          This sends a PATCH request to the backend, which updates the 'done' field
          for the task in MongoDB Atlas. The UI is then refreshed to show the new state.
        */}
        {tasks.map(task => (
          <li
            key={task._id}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2 border border-purple-100 hover:shadow-2xl transition-shadow"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => handleToggleDone(task._id, task.done)}
                className={`form-checkbox h-5 w-5 rounded transition-colors duration-200 ${
                  task.done ? 'text-blue-600 border-blue-600 focus:ring-blue-500' : 'text-gray-400 border-gray-300'
                }`}
                style={task.done ? { accentColor: '#2563eb' } : {}}
              />
              <strong className={`text-lg ${task.done ? 'text-blue-700' : 'text-purple-700'}`}>
                {task.title}
              </strong>
            </div>
            <span className="text-gray-600">{task.description}</span>
            <div className="flex gap-2 mt-2">
              <button
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                // onClick={() => handleEdit(task._id)} // Placeholder for edit functionality
                disabled
              >
                Edit
              </button>
              <button
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                onClick={() => handleDelete(task._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
