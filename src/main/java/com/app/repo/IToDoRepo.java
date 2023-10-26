package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.Todo;
@Repository
public interface IToDoRepo extends JpaRepository<Todo, Long> {

}
