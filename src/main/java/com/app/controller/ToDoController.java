package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.app.entity.Todo;
import com.app.service.TodoService;

@RestController
public class ToDoController {
private TodoService service;
@Autowired
public ToDoController(TodoService service) {
    this.service = service;
}
@GetMapping("/viewToDoList")
public ResponseEntity<?> getTodo(){
	List<Todo> todoItems=service.fetchAllTodos();
	return ResponseEntity.ok(todoItems);
}
@PostMapping("/addToDoItem")
public ResponseEntity<?> createTodo(@RequestParam String title){
	Todo todoItem=service.createTodoItem(title);
	return ResponseEntity.ok(todoItem);
}

@PutMapping("/updateTODoItem/{id}")
public ResponseEntity<?> updateTodo(@PathVariable Long id,@RequestBody Todo todo){
	Todo updateTodo= service.updateTodoItem(id,todo);
	return ResponseEntity.ok(updateTodo);
}

@DeleteMapping("/deletToDoItem/{id}")
public ResponseEntity<?> deleteTodo (@PathVariable Long id){
	service.deleteTodoItem(id);
	return ResponseEntity.ok("ok");
}

}
