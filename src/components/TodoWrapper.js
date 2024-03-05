// TodoWrapper.js
import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), task: todo, completed: false },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, updatedTask) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, task: updatedTask } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <div className="todo-btn">
        <TodoForm addTodo={addTodo} />
      </div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      ))}
    </div>
  );
};
