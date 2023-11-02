import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import './logic.css';

const EditTaskModal = ({ open,onClose }) =>{
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
                // value={newTask}
                // onChange={(e) => setNewTask(e.target.value)}
              />
              </div>
              <div className='btnContainer'>
                <button className='btnPrimary'>
                  <span className='bold'>Done</span>
                </button>
               
              </div>
              </div>
            </div>
          </div>
      
    )
   
}
export default EditTaskModal;