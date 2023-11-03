import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import TodoService from "./TodoService";
import "./Item.css";
import AddTaskModal from './AddTaskModal';
import EditTaskModal from "./EditTaskModal";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
     
    //AddTaskstate Variable
    const [OpenModal, setOpenModal] = useState(false);
    //EditTaskstate Variable
    const [EditOpenModal, EditsetOpenModal] = useState(false);
    //DeleteToast
    const DeleteTask= () =>{
      toast.warning("Task Deleted !",{
        position:toast.POSITION.TOP_RIGHT
      });
    };
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
            
            <button className="btn4" onClick={DeleteTask}><i class="fa-solid fa-trash"></i></button></td>
            

            </div>
          </tr>)

        }
    </tbody>
</table>
<ToastContainer/>
    </div>
)
}
export default Item;