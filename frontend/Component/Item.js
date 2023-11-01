import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import TodoService from "./TodoService";
import "./Item.css";
import AddTaskModal from './AddTaskModal';

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
     
    //modal
    const [isModalOpen, setIsModalOpen] = useState(false);
     
    const handleAddTask = (newTask) => {
        // Implement the logic to add the new task here
        console.log('Adding task:', newTask);
        setIsModalOpen(false); // Close the modal after adding the task
      };
return(
    <div className="todoItem">
        <h1 className="text-center">Task List</h1>
        <div className="add-task-container">
        <button
        className="btn1"
        onClick={() => {
          console.log('Add New Task button clicked');
          setIsModalOpen(true);
        }}
      >
        Add New Task
      </button>
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
            <td><button className="btn2"><i class="fa-solid fa-check" ></i></button><button class="btn3"><i class="fa-solid fa-pen-to-square"></i></button><button className="btn4"><i class="fa-solid fa-trash"></i></button></td>
            </div>
          </tr>)

        }
    </tbody>
</table>
<AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTask={handleAddTask}
      />

    </div>
)
}
export default Item;