import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import { useEffect } from 'react';
import './logic.css';

const EditTaskModal = ({ open, onClose, onUpdateTask,initialTitle }) => {
  const [Task, setUpdateTask] = useState('');

  useEffect(() => {
    setUpdateTask(initialTitle || ''); // Use an empty string if initialTitle is undefined
  }, [initialTitle]);


  const handleUpdateTask = () => {
    // Call the parent component's handleCreateTask function
    onUpdateTask(Task);
    // Optionally, you can also close the modal
    onClose();
  }
    if(!open) return null;
    return(
       
          <div className="overlay-edit">
            <div className="modal-container">
             <div className='modalRight'>
              <buttton className='closebtn' onClick={onClose}><i class="fa-solid fa-circle-xmark"></i></buttton>
              <div className='content'>
              <h2>Edit Task</h2>
              <input
                type="text"
                placeholder="Task name"
                value={Task}
                onChange={(e) => setUpdateTask(e.target.value)}
              />
              </div>
              <div className='btnContainer'>
                <button className='btnPrimary' onClick={handleUpdateTask}>
                  <span className='bold'>Done</span>
                </button>
               
              </div>
              </div>
            </div>
          </div>
      
    )
   
}
export default EditTaskModal;