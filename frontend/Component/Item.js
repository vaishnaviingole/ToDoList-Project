import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import TodoService from "../src/TodoService";
import "./Item.css";
const Item=()=>{
    const [todoItem,setTodoItem]=useState([])
    useEffect(()=>{getToDo()},[])
    const getToDo= () =>{
        TodoService.getToDo().then((response)=>{
            setTodoItem(response.data)
            console.log(response.data);
        });
    };
return(
    <div className="todoItem">
        <h1 className="text-center">Task List</h1>
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
            <td><button><i class="fa-solid fa-check"></i></button></td>
          </tr>)

        }
    </tbody>
</table>
    </div>
)
}
export default Item;