import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import TodoService from "./TodoService";
import "./Item.css";
import"./logic.js";
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
     // State variable for modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Handler to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Handler to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Handler to add a new task
    const handleAddTask = (newTask) => {
        // Implement the logic to add the new task here
        console.log('Adding task:', newTask);
    };
return(
    <div className="todoItem">
        <h1 className="text-center">Task List</h1>
        <div className="add-task-container">
                <button className="btn1" onClick={openModal}>Add New Task</button>
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
            <td><button className="btn2"><i class="fa-solid fa-check"></i></button></td>
          </tr>)

        }
    </tbody>
</table>


    </div>
)
}
export default Item;