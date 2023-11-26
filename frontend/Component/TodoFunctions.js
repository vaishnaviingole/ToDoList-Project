import React from 'react';
import TodoService from "./TodoService";

export const handleCompleteTask = (taskId, getToDo) => {
  // Send a request to mark the task as complete
  TodoService.completeToDo(taskId) // Call your backend endpoint here
    .then((response) => {
      if (response.status === 200) {
        alert('Task completed successfully');
        // Update your frontend state or UI to reflect the task as completed
        // For example, you can remove the task from the list or change its appearance.
        getToDo(); // Fetch updated task list
      } else {
        alert('Failed to complete the task');
        console.error('Failed to complete the task:', response);
      }
    })
    .catch((error) => {
      alert('An error occurred while completing the task');
      console.error('Error completing the task:', error);
    });
};

export const handleDeleteTask = (taskId, DeleteTask, getToDo) => {
  // Send a request to delete the task
  TodoService.deleteToDo(taskId) // Call your backend endpoint here
    .then((response) => {
      if (response.status === 200) {
        DeleteTask(); // Display the "Task Deleted" toast
        alert('Task deleted successfully');
        // Update your frontend state or UI to reflect the task deletion
        // For example, you can remove the task from the list.
        getToDo(); // Fetch updated task list
      } else {
        alert('Failed to delete the task');
        console.error('Failed to delete the task:', response);
      }
    })
    .catch((error) => {
      alert('An error occurred while deleting the task');
      console.error('Error deleting the task:', error);
    });
 
   
    
};
 //addTodo
export const handleCreateTask = (title,getToDo,setTodoItem) => {
  TodoService.createTodoItem(title)
    .then((response) => {
      if (response.status === 200) {
        // Handle successful creation, update UI, etc.
        setTodoItem((prevTodoItem) => [...prevTodoItem, response.data]);
        alert('Task created successfully');
        getToDo(); // Fetch updated task list
      } else {
        alert('Failed to create the task');
        console.error('Failed to create the task:', response);
      }
    })
    .catch((error) => {
      alert('An error occurred while creating the task');
      console.error('Error creating the task:', error);
    });
};

export const handleUpdateTask = (taskId,updatetitle,getToDo,setTodoItem) => {
  TodoService.updateToDo(taskId,updatetitle)
    .then((response) => {
      if (response.status === 200) {
        // Handle successful update, update UI, etc.
        setTodoItem((prevTodoItem) => 
          prevTodoItem.map(todo => 
            todo.id === taskId ? { ...todo, title: updatedTitle } : todo
          ));
        alert('Task updated successfully');
        getToDo(); // Fetch updated task list
      } else {
        alert('Failed to create the task');
        console.error('Failed to update the task:', response);
      }
    })
    .catch((error) => {
      alert('An error occurred while updating the task');
      console.error('Error updating the task:', error);
    });
};
