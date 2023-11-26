import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import './logic.css';

const AddTaskModal = ({ open, onClose, onCreateTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    // Call the parent component's handleCreateTask function
    onCreateTask(newTask);
    // Optionally, you can also close the modal
    onClose();
  }
  if(!open) return null;
    
  
    return (
      <div className="overlay">
        <div className="modal-container">
         <div className='modalRight'>
          <buttton className='closebtn' onClick={onClose}><i class="fa-solid fa-circle-xmark"></i></buttton>
          <div className='content'>
          <h2>Add New Task</h2>
          <input
            type="text"
            placeholder="Task name"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          </div>
          <div className='btnContainer'>
            <button className='btnPrimary'onClick={handleAddTask}>
              <span className='bold'>ADD</span>
            </button>
           
          </div>
          </div>
        </div>
      </div>
    ) 
  };
  
  export default AddTaskModal;