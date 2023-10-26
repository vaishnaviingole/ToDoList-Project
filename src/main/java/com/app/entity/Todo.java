package com.app.entity;



import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table
public class Todo {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
private long id;
@Column
private String Title;
@Column
@Enumerated(EnumType.STRING)
private TodoStatus status;

@Column
@DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
private LocalDate date;
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getTitle() {
	return Title;
}
public void setTitle(String title) {
	Title = title;
}
public TodoStatus getStatus() {
	return status;
}
public void setStatus(TodoStatus status) {
	this.status = status;
}
public LocalDate getDate() {
	return date;
}
public void setDate(LocalDate localDate) {
	this.date = localDate;
}
@Override
public String toString() {
	
	return super.toString();
}

}
