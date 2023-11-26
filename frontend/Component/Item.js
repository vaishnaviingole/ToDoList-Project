import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import TodoService from "./TodoService";
import "./Item.css";
import AddTaskModal from './AddTaskModal';
import EditTaskModal from "./EditTaskModal";
import { handleCompleteTask, handleDeleteTask,handleCreateTask ,handleUpdateTask } from "./TodoFunctions";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
//method to handel complete task
// const handleCompleteTask = (taskId) => {
//   // Send a request to mark the task as complete
//   TodoService.completeToDo(taskId) // Call your backend endpoint here
//     .then((response) => {
//       if (response.status === 200) {
//         alert('Task completed successfully');
//         // Update your frontend state or UI to reflect the task as completed
//         // For example, you can remove the task from the list or change its appearance.
//       } else {
//         alert('Failed to complete the task');
//         console.error('Failed to complete the task:', response);
//       }
//     })
//     .catch((error) => {
//       alert('An error occurred while completing the task');
//       console.error('Error completing the task:', error);
//     });
// };

const Item=()=>{
    // state var for viewing list
    const [todoItem,setTodoItem]=useState([]);
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
      <AddTaskModal open={(OpenModal)} onClose={()=> setOpenModal(false)}  onCreateTask={(title) =>{console.log('Titles:', title); handleCreateTask(title, getToDo,setTodoItem)}}/>
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
              <button className="btn2"><i class="fa-solid fa-check" onClick={() => handleCompleteTask(todo.id)} ></i></button>
                


            <button class="btn3"><i class="fa-solid fa-pen-to-square" onClick={() => {
          console.log('Add New Task button clicked');
          EditsetOpenModal(true);
        }}></i></button>
              
              <EditTaskModal
                  open={EditOpenModal}
                  onClose={() => EditsetOpenModal(false)}
                  onUpdateTask={(updatetitle) =>
                    handleUpdateTask(todo.id, updatetitle, getToDo, setTodoItem)
                  }
                  initialTitle={todo.title} // Pass the initial title
                />
            
            <button className="btn4"  onClick={() => handleDeleteTask(todo.id, DeleteTask, getToDo)}><i class="fa-solid fa-trash"></i></button></td>
            

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