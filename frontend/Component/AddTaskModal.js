import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import './logic.css';

const AddTaskModal = ({ isOpen, onClose, onAddTask }) => {
    const [newTask, setNewTask] = useState('');
  
    const handleAddTask = () => {
      if (newTask.trim() === '') {
        alert('Please enter a task.');
      } else {
        onAddTask(newTask);
        setNewTask('');
        onClose();
      }
    };
  
    return isOpen ? (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <h2>Add New Task</h2>
          <input
            type="text"
            placeholder="Task name"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
      </div>
    ) : null;
  };
  
  export default AddTaskModal;