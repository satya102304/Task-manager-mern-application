
```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard({ onLogout }) {
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({ title: '', description: '' });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get('/api/tasks', {
        headers: { 'x-auth-token': localStorage.getItem('token') }
      });
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/tasks', formData, {
        headers: { 'x-auth-token': localStorage.getItem('token') }
      });
      setFormData({ title: '', description: '' });
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const toggleComplete = async (id, completed) => {
    try {
      await axios.put(`/api/tasks/${id}`, { completed: !completed }, {
        headers: { 'x-auth-token': localStorage.getItem('token') }
      });
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`/api/tasks/${id}`, {
        headers: { 'x-auth-token': localStorage.getItem('token') }
      });
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Task Manager</h1>
        <button onClick={onLogout} className="btn-logout">Logout</button>
      </div>

      <div className="task-form">
        <h3>Add New Task</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Task title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
          <textarea
            placeholder="Task description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
          <button type="submit" className="btn">Add Task</button>
        </form>
      </div>

      <div className="tasks-list">
        {tasks.map(task => (
          <div key={task._id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <div className="task-actions">
              <button onClick={() => toggleComplete(task._id, task.completed)} className="btn-small btn-complete">
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button onClick={() => deleteTask(task._id)} className="btn-small btn-delete">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
```