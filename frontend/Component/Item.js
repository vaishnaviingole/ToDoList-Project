import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import TodoService from "./TodoService";
import "./Item.css";
import AddTaskModal from './AddTaskModal';
import EditTaskModal from "./EditTaskModal";

const Item=()=>{
    // state var for viewing list
    const [todoItem,setTodoItem]=useState([])
    useEffect(()=>{getToDo()},[])
    const getToDo= () =>{
        TodoService.getToDo().then((response)=>{
            setTodoItem(response.data)
            console.log(response.data);
        });
        
    };
     
    //AddTaskmodal
    const [OpenModal, setOpenModal] = useState(false);
    const [EditOpenModal, EditsetOpenModal] = useState(false);
    // const handleAddTask = (newTask) => {
    //     // Implement the logic to add the new task here
    //     console.log('Adding task:', newTask);
    //     setIsModalOpen(false); // Close the modal after adding the task
    //   };
return(
    <div className="todoItem">
        <h1 className="text-center">Task List</h1>
        <div className="add-task-container">
        <button
        className="btn1"
        onClick={() => {
          console.log('Add New Task button clicked');
          setOpenModal(true);
        }}
      >
        Add New Task
      </button>
      <AddTaskModal open={(OpenModal)} onClose={()=> setOpenModal(false)}/>
            </div>
<table className="table1">
    <thead>
    <tr>
        <th>ID</th>
        <th>Task</th>
        <th>Status</th>
        <th>Date</th>
        <th>Action</th>
        
    </tr>
    </thead>
    <tbody>
        {
          todoItem.map(todo=> <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo.status}</td>
            <td>{todo.date}</td>
            <div className="action">
            <td>
              {/* task Done */}
              <button className="btn2"><i class="fa-solid fa-check" ></i></button>
                


            <button class="btn3"><i class="fa-solid fa-pen-to-square" onClick={() => {
          console.log('Add New Task button clicked');
          EditsetOpenModal(true);
        }}></i></button>
              
            <EditTaskModal open={(EditOpenModal)} onClose={()=> EditsetOpenModal(false)}/>
            
            <button className="btn4"><i class="fa-solid fa-trash"></i></button></td>
            </div>
          </tr>)

        }
    </tbody>
</table>

    </div>
)
}
export default Item;