import React, { useState } from "react";
import "./TodoForm.css";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [currentTask, setCurrentTask] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    setCurrentTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <>
      <h4 class="text-content">TODOLIST</h4>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          value={value}
          placeholder="What is the task today"
          onChange={handleChange} // Call handleChange on input change
        />
        <button type="submit" className="todo-btn">
          AddTask
        </button>

        {/* {currentTask && <p>{currentTask}</p>} */}
      </form>
    </>
  );
};
