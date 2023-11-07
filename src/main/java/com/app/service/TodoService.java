package com.app.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entity.Todo;
import com.app.entity.TodoStatus;
import com.app.repo.IToDoRepo;
import com.appp.exception.TodoException;

@Service
public class TodoService {
	@Autowired
	private IToDoRepo repo;

	public List<Todo> fetchAllTodos() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	public Todo createTodoItem(String title) {
		// TODO Auto-generated method stub
		Todo newTodo= new Todo();
		newTodo.setTitle(title);
		newTodo.setDate(LocalDate.now());
		  if (newTodo.getStatus() == null) {
	            newTodo.setStatus(TodoStatus.PENDING);
	        }
		   Todo createdTodo = repo.save(newTodo);
		return createdTodo;
	}

	public Todo updateTodoItem(Long id, Todo todo) {
		// TODO Auto-generated method stub
		Optional <Todo> existingTodoOpt= repo.findById(id);
		if(existingTodoOpt.isPresent()) {
			Todo existingTodo=existingTodoOpt.get();
		
		if(todo.getTitle()!=null) {
			existingTodo.setTitle(todo.getTitle());
		}
		
		return repo.save(existingTodo);
		}
		else {
		return null;
		}
	}

	public void deleteTodoItem(Long id) {
		// TODO Auto-generated method stub
	   repo.deleteById(id);
		
	}

	public Todo completeTodoItem(Long id, Todo todo) throws TodoException {
		// TODO Auto-generated method stub
		 Todo existingTodo = repo.findById(id).orElseThrow(() -> new TodoException("id not found"));

		    // Assuming that "status" is an enum in your Todo class
		    existingTodo.setStatus(TodoStatus.COMPLETED);

		    // You can update other properties of the Todo here if needed.
		    // For example, you might want to update the completion date.

		    // Save the updated Todo to the repository
		    return repo.save(existingTodo);
	}
 

}
